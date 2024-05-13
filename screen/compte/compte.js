import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import FirstTitle from '../../component/FirstTitle';
import ProjectPlus from '../../component/ProjectPlus';
import InfoCompte from '../../component/compte/InfoCompte';
import MesProjets from '../../component/compte/MesProjets';

const Compte = ({ navigation }) => {
  const { signOut } = useAuthContext();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ProjectPlus navigation={navigation} />
        <FirstTitle titleUp="Mon" titleDown="Compte" />
        <InfoCompte />
        <MesProjets navigation={navigation} />
        <Button title="Go to Details... again" onPress={() => navigation.navigate('newProject')} />
        <Button title="Deconnexion" onPress={() => signOut()} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
    minHeight: '100%',
  },
});
export default Compte;
