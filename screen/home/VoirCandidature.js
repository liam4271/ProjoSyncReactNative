import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../config/API';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const VoirCandidature = ({ route }) => {
  const { projetId, projet, suiviStat } = route.params;
  const [allCandidature, setAllCandidature] = useState([]);
  const fetchAllCandidature = async () => {
    try {
      const data = await getRequest(`/candidature/projet/${projetId}`);
      console.log(data);
      setAllCandidature(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllCandidature();
  }, []);
  const handleAcceptCandidature = async (idCandidature) => {
    await postRequest(`/candidature/accept/${idCandidature}`, {});
    fetchAllCandidature();
  };
  const handleDenyCandidature = async (idCandidature) => {
    await postRequest(`/candidature/deny/${idCandidature}`, {});
    fetchAllCandidature();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nomProjet}>Suivi par {suiviStat}</Text>
      <Text style={styles.nomProjet}>{projet.nom}</Text>
      <Text style={styles.statutProjet}>{projet.statut}</Text>
      {allCandidature.map((candidature) => (
        <View key={candidature.id}>
          <Text>
            {candidature.candidatureUtilisateur.nom} {candidature.candidatureUtilisateur.prenom}
          </Text>
          <Text>{candidature.candidatureUtilisateur.competenceUtilisateur.nom}</Text>
          <Text>{candidature.message_candidature}</Text>
          <Pressable onPress={() => handleAcceptCandidature(candidature.id)}>
            <Text>Accepter la candidature</Text>
          </Pressable>
          <Pressable onPress={() => handleDenyCandidature(candidature.id)}>
            <Text>Rejeter la candidature</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  nomProjet: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statutProjet: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default VoirCandidature;
