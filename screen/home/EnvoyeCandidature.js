import { Pressable, SafeAreaView, Text } from 'react-native';
import FirstTitle from '../../component/FirstTitle';
import { FormProvider, useForm } from 'react-hook-form';
import InputText from '../../component/form/InputText';
import { postRequest } from '../../config/API';

const EnvoyeCandidature = ({ navigation, route }) => {
  const { projetId } = route.params;
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = async (data) => {
    try {
      const value = { ...data, id_projet: projetId };
      console.log(value);
      const dataRequest = await postRequest('/candidature', value);
      console.log(dataRequest);
      navigation.navigate('monProjetDetails', { projetId: projetId });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView>
      <FirstTitle titleUp="Nouvelle" titleDown="Candidature" />
      <FormProvider {...methods}>
        <InputText
          name="message_candidature"
          placeholder={'Décrivez vos point fort'}
          rules={{ required: 'Description requise' }}
        />
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text>Envoyer la candidature</Text>
        </Pressable>
      </FormProvider>
    </SafeAreaView>
  );
};

export default EnvoyeCandidature;
