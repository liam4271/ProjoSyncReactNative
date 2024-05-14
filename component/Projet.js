import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProfilProjet from './ProfilProjet';
import HeaderProjet from './HeaderProjet';
import { getRequest } from '../config/API';
import ProjetCard from './ProjetCard';
import { useFocusEffect } from '@react-navigation/native';

const Projet = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [projets, setProjets] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getRequest('/projet/me/participe');
      setProjets(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>En attente ...</Text>
      </View>
    );
  }

  const render = (item) => {
    return <ProjetCard item={item.item} navigation={navigation} />;
  };

  if (projets.length === 0) {
    return <Text>Pas de projets</Text>;
  }
  return (
    <View>
      <FlatList
        horizontal={true} // Défilement horizontal
        style={styles.Projetcontainer}
        data={projets}
        renderItem={render}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 116,
    borderWidth: 1,
    borderColor: '#E3E3E1',
    padding: 8,
    marginRight: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Projet;
