import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ProfilProjet from './ProfilProjet';
import HeaderProjet from './HeaderProjet';

const Projet = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetch('http://172.20.10.2:3001/projets', {
      timeout: 1000, // Spécifiez le délai d'attente en millisecondes (ici 10 secondes)
    })
      .then((response) => response.json())
      .then((data) => {
        setProjets(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); 
        setLoading(false);
      });
  }, []); 
  

  const navigateToDetails = (item) => {
    navigation.navigate('monProjetDetails', { projet: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
        <View style={styles.container}>
            <HeaderProjet
                nomProjet={item.nom}
                statutProjet={item.statut}
                imageProjet={item.image}
            />
            <ProfilProjet/>
        </View>
    </TouchableOpacity>
);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>En attente ...</Text>
      </View>
    );
  }

  return (
    <View > 
      <FlatList 
        horizontal={true} // Défilement horizontal
        style={styles.Projetcontainer}
        data={projets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width:225,
        height: 116,
        borderWidth:1,
        borderColor:  "#E3E3E1", 
        padding: 8,
        marginRight: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
});

export default Projet;
