const API_URL = 'http://192.168.1.17:3001';
import * as SecureStore from 'expo-secure-store';

const getToken = async () => {
  const token = await SecureStore.getItemAsync('token');
  return token;
};

const getAuthorizationHeader = async () => {
  return { Authorization: `Bearer ${await getToken()}` };
};

const getRequest = async (url, headers = {}, isConnected = true) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      timeout: 1000,
      headers: { ...headers, ...(isConnected ? await getAuthorizationHeader() : '') },
    });
    if (!response.ok) {
      throw new Error('Erreur de connexion');
    }
    const data = await response.json();
    if (data.status === 'error') {
      throw new Error(data.message);
    }
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const postRequest = async (url, body, headers = {}, isConnected = true) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      timeout: 1000,
      headers: {
        ...headers,
        ...(isConnected ? await getAuthorizationHeader() : ''),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Erreur de connexion');
    }
    const data = await response.json();
    if (data.status === 'error') {
      throw new Error(data.message);
    }
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export { API_URL, getRequest, postRequest };
