import { FlatList, Text, View } from 'react-native';
import ProjetCard from '../ProjetCard';
import { useCallback, useState } from 'react';
import { getRequest } from '../../config/API';
import { useFocusEffect } from '@react-navigation/native';

const ProjetSuivi = ({ navigation }) => {
  const [projetsSuivi, setProjetsSuivi] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchData = async () => {
    try {
      setIsloading(true);
      const data = await getRequest('/projet/me/suivis');
      setProjetsSuivi(data);
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
      {isLoading ? (
        <Text>Loading...</Text>
      ) : projetsSuivi.length === 0 ? (
        <Text>Pas de projets à afficher</Text>
      ) : (
        <FlatList
          horizontal={true}
          data={projetsSuivi}
          renderItem={render}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      )}
    </View>
  );
};

export default ProjetSuivi;
