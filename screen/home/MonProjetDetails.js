import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, ScrollView } from 'react-native';
import { getRequest, postRequest } from '../../config/API';

const MonProjetDetails = ({ route, navigation }) => {
  const [isOwner, setIsOwner] = useState(false);
  const [isInProjet, setIsInProjet] = useState(false);
  const [suiviStat, setSuiviStat] = useState(0);
  const [dejaSuivis, setDejaSuvis] = useState(false);
  const [projet, setProjet] = useState();
  const { projetId } = route.params;
  const getSuiviStat = async () => {
    try {
      const dataProjet = await getRequest(`/projet/${projetId}`);
      const data = await getRequest(`/projet/${projetId}/countSuivis`);
      const dataStatus = await getRequest(`/projet/${projetId}/me/statutSuivis`);
      const dataOwner = await getRequest(`/projet/${projetId}/me/checkOwner`);
      const dataInProjet = await getRequest(`/projet/${projetId}/me/checkIsInProjet`);
      setIsOwner(dataOwner);
      setIsInProjet(dataInProjet);
      setSuiviStat(data);
      setDejaSuvis(dataStatus);
      setProjet(dataProjet);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSuiviStat();
  }, []);
  const handleSuivreAcion = async () => {
    try {
      await postRequest(`/projet/${projet.id}/suivre`, {});
      getSuiviStat();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEnvoyeCandidature = () => {
    navigation.navigate('envoyeCandidature', { projetId: projetId });
  };
  const handleVoirCandidature = () => {
    navigation.navigate('voirCandidature', { projetId: projetId, projet, suiviStat });
  };
  if (!projet) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!isOwner && (
        <Pressable onPress={handleSuivreAcion}>
          <Text style={styles.nomProjet}>{dejaSuivis ? 'Suivis' : 'Suivre'}</Text>
        </Pressable>
      )}
      <Text style={styles.nomProjet}>Suivi par {suiviStat}</Text>
      <Image source={{ uri: projet.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.nomProjet}>{projet.nom}</Text>
        <Text style={styles.nomProjet}>{projet.description}</Text>
        <Text style={styles.statutProjet}>{projet.statut}</Text>
        <Text style={styles.autresDetails}>Ville: {projet.ville}</Text>
        <Text style={styles.autresDetails}>Recherche</Text>
        {isOwner && (
          <Pressable onPress={handleVoirCandidature}>
            <Text>Voir les candidature</Text>
          </Pressable>
        )}
        {projet.profileProjet.map((profilProjet) => (
          <View key={profilProjet.id}>
            <Text>{profilProjet.profileCompetence.nom}</Text>
            <Text>{profilProjet.description}</Text>
          </View>
        ))}
        {isOwner ? (
          <Pressable>
            <Text>Modifier le projet</Text>
          </Pressable>
        ) : (
          !isInProjet && (
            <Pressable onPress={handleEnvoyeCandidature}>
              <Text>Rejoindre le projet</Text>
            </Pressable>
          )
        )}
      </View>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
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
  autresDetails: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MonProjetDetails;
