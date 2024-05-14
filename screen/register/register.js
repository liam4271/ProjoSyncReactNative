import { FormProvider, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Pressable, StyleSheet, Text } from 'react-native';
import InputText from '../../component/form/InputText';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { getRequest, postRequest } from '../../config/API';
import PickerInput from '../../component/form/PickerInput';

const Register = ({ navigation }) => {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [competences, setCompetences] = useState([]);
  const { signIn } = useAuthContext();

  const methods = useForm();
  const { handleSubmit } = methods;
  const fetchCompetence = async () => {
    try {
      const allCompetence = await getRequest('/competence', {}, false);
      console.log(allCompetence);
      setCompetences(allCompetence);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCompetence();
  }, []);
  const register = async (formValue) => {
    try {
      const data = await postRequest('/authentification/register', formValue, {}, false);
      if (data.status === 'success') {
        await signIn({ email: formValue.email, mdp: formValue.mdp });
        return;
      } else {
        throw new Error('Erreur lors de la crétion de compte');
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };
  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsloading(true);
      await register(data);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.message);
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <FormProvider {...methods}>
        <InputText name={'nom'} placeholder={'Nom'} rules={{ required: 'Nom obligatoire' }} />
        <InputText name={'prenom'} placeholder={'Prenom'} rules={{ required: 'Prenom obligatoire' }} />
        <InputText name={'tel'} placeholder={'Téléphone'} rules={{ required: 'Téléphone obligatoire' }} />
        <InputText name={'ville'} placeholder={'Ville'} rules={{ required: 'Ville obligatoire' }} />
        <InputText name={'email'} placeholder={'Email'} rules={{ required: 'Email obligatoire' }} />
        <InputText
          name={'mdp'}
          placeholder={'Mot de passe'}
          rules={{ required: 'Mot de passe obligatoire' }}
          password
        />
        <PickerInput
          name="id_competence"
          items={competences.map((competence) => ({ label: competence.nom, value: competence.id }))}
          rules={{ required: 'Requis' }}
        />
        <Pressable
          style={isLoading ? styles.disabledBtn : styles.button}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          <Text style={styles.btnText}>{isLoading ? 'Chargement...' : 'Créer un compte'}</Text>
        </Pressable>
      </FormProvider>
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
    height: 60,
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
export default Register;
