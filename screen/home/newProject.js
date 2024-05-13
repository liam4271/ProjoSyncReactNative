import { Text, ScrollView, SafeAreaView, StyleSheet, Pressable, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import FirstTitle from '../../component/FirstTitle';
import InputText from '../../component/form/InputText';
import { FormProvider, useForm } from 'react-hook-form';
import { postRequest } from '../../config/API';
import { Picker } from '@react-native-picker/picker';
import PickerInput from '../../component/form/PickerInput';

const NewProject = () => {
  const [profilListe, setProfilListe] = useState([]);
  const methods = useForm();
  const methodsProfil = useForm();
  const onSubmitProfil = async (data) => {
    console.log(data);
    setProfilListe((prev) => [...prev, data]);
    methodsProfil.reset();
  };
  const onSubmit = async (data) => {
    const value = { ...data, profilRecherche: profilListe };
    console.log(value);
    await postRequest('/projet', value);
    methods.reset();
  };
  const Item = ({ item }) => {
    return (
      <View style={styles.profil}>
        <Text style={styles.profilText}>{item.competence}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
        <FirstTitle titleUp="Nouveau" titleDown="Projet" />
        <Text>Information Principale</Text>
        <FormProvider {...methods}>
          <InputText name={'nom'} placeholder={'Nom du projet'} rules={{ required: 'Nom Obligatoire' }} />
          <InputText name={'description'} placeholder={'description'} rules={{ required: 'Description Obligatoire' }} />
          <InputText name={'ville'} placeholder={'ville'} rules={{ required: 'Ville Obligatoire' }} />
          <PickerInput
            name="statut"
            items={[
              { label: 'En cours', value: 'En cours' },
              { label: 'A débuter', value: 'A débuter' },
              { label: 'Finalisé', value: 'Finalisé' },
            ]}
            rules={{ required: 'Requis' }}
          />
        </FormProvider>
        <Text>Profil recherché</Text>
        <FormProvider {...methodsProfil}>
          <InputText name={'competence'} placeholder={'Compétence'} rules={{ required: 'Compétence Obligatoire' }} />
          <InputText name={'description'} placeholder={'Précision'} rules={{ required: 'Précision Obligatoire' }} />
          <Pressable onPress={methodsProfil.handleSubmit(onSubmitProfil)} style={styles.button}>
            <Text style={styles.btnText}>Ajouter</Text>
          </Pressable>
        </FormProvider>
        <FlatList data={profilListe} renderItem={Item} keyExtractor={(_, index) => index.toString()} horizontal />
        <Pressable onPress={methods.handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.btnText}>Créer le projet</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
    minHeight: '100%',
    width: '100%',
  },
  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 30,
  },
  btnText: {
    fontSize: 15,
    color: '#231942',
    fontWeight: 'bold',
  },
  profilList: {
    flexDirection: 'row',
    flex: 3,
  },
  profil: {
    padding: 10,
    color: 'white',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    fontSize: 10,
  },
  profilText: {
    color: 'white',
  },
});

export default NewProject;
