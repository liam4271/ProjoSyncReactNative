import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { getRequest, postRequest } from '../../config/API';

const MonProjetDetails = ({ route }) => {
  const [suiviStat, setSuiviStat] = useState(0);
  const [dejaSuivis, setDejaSuvis] = useState(false);
  const { projet } = route.params;
  const getSuiviStat = async () => {
    try {
      console.log(projet);
      const data = await getRequest(`/projet/${projet.id}/countSuivis`);
      const dataStatus = await getRequest(`/projet/${projet.id}/me/statutSuivis`);
      setSuiviStat(data);
      setDejaSuvis(dataStatus);
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
  return (
    <View style={styles.container}>
      <Pressable onPress={handleSuivreAcion}>
        <Text>{dejaSuivis ? 'Suivis' : 'Suivre'}</Text>
      </Pressable>
      <Text>Suivi par {suiviStat}</Text>
      <Image source={{ uri: projet.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.nomProjet}>{projet.nom}</Text>
        <Text style={styles.statutProjet}>{projet.statut}</Text>
        <Text style={styles.autresDetails}>Ville: {projet.ville}</Text>
      </View>
    </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statutProjet: {
    fontSize: 18,
    marginBottom: 10,
  },
  autresDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MonProjetDetails;
