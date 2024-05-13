import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { getRequest } from '../../config/API';
import ProjetCard from '../ProjetCard';

const MesProjets = ({ navigation }) => {
  const [mesProjets, setMesProjets] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        console.log('get data');
        const data = await getRequest('/projet/me');
        console.log('data projet', data);
        setMesProjets(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);
  const render = (item) => {
    return <ProjetCard item={item.item} navigation={navigation} />;
  };

  return (
    <View>
      <View>
        <Text>Projet réalisé</Text>
        <Text>Voir candidature</Text>
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
