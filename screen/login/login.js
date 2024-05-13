import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import { Pressable } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import InputText from '../../component/form/InputText';

const Login = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, isError, errorMessage } = useAuthContext();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      await signIn(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <FormProvider {...methods}>
        <InputText name={'email'} placeholder={'Email'} rules={{ required: 'Email requis' }} />
        <InputText
          name={'mdp'}
          placeholder={'Mot de passe'}
          rules={{ required: 'Mot de passe requis' }}
          password={true}
        />
        <Pressable
          style={isLoading ? styles.disabledBtn : styles.button}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <Text style={styles.btnText}>{isLoading ? 'Chargement...' : 'Se connecter'}</Text>
        </Pressable>
      </FormProvider>
      <Pressable onPress={() => navigation.navigate('register')} style={styles.button}>
        <Text style={styles.btnText}>Créer un compte</Text>
      </Pressable>
      {isError && <Text style={styles.error}>{errorMessage}</Text>}
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  disabledBtn: {
    width: '80%',
    height: 40,
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'wheat',
  },
  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  btnText: {
    fontSize: 15,
    color: '#231942',
    fontWeight: 'bold',
  },
});
export default Login;
