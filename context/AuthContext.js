import React, { useCallback, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { getRequest, postRequest } from '../config/API';

const AuthContext = React.createContext({
  signIn: async () => {},
  signOut: () => null,
  token: null,
  isError: false,
  errorMessage: '',
  isLoggedIn: null,
  verifyLogin: async () => {},
});

export function useAuthContext() {
  const value = React.useContext(AuthContext);
  if (!value) {
    throw new Error('Must use the value of the context in the context');
  }
  return value;
}

export function AuthProvider(props) {
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const login = async (credential) => {
    try {
      const data = await postRequest('/authentification/login', credential);
      if (!data) {
        throw new Error('Erreur');
      }
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      if (data.status === 'success' && data.token) {
        await SecureStore.setItemAsync('token', data.token);
      }
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const getCurrentUser = async () => {
    try {
      console.log('here');
      const data = await getRequest('/me');
      console.log(data)
      setIsLoggedIn(true);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const verifyLogin = useCallback(async () => {
    try {
      await getCurrentUser();
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn: async (credential) => {
          try {
            setIsError(false);
            await login(credential);
          } catch (err) {
            setIsLoggedIn(false);
            setIsError(true);
            if (err?.message) {
              setErrorMessage(err.message);
            } else {
              setErrorMessage('Une erreur est survenue');
            }
          }
        },
        signOut: () => {
          setIsLoggedIn(false);
          SecureStore.deleteItemAsync('token');
        },
        isError,
        errorMessage,
        isLoggedIn,
        verifyLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
