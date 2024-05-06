import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MonProjetDetails = ({  route }) => {
  const { projet } = route.params;

  return (
    <View style={styles.container}>
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
