import { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { getRequest } from '../../config/API';
import ProjetCard from '../ProjetCard';
import { useFocusEffect } from '@react-navigation/native';

const MesProjets = ({ navigation }) => {
  const [mesProjets, setMesProjets] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchData = async () => {
    try {
      setIsloading(true);
      const data = await getRequest('/projet/me');
      setMesProjets(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const render = (item) => {
    return <ProjetCard item={item.item} navigation={navigation} />;
  };

  return (
    <View>
      <View>
        <Text>Projet créé</Text>
      </View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : mesProjets.length === 0 ? (
        <Text>Pas de projets à afficher</Text>
      ) : (
        <FlatList
          horizontal={true}
          data={mesProjets}
          renderItem={render}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      )}
    </View>
  );
};

export default MesProjets;
