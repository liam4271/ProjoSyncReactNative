import { useEffect, useState } from 'react';
import { getRequest } from '../../config/API';
import { View, Text } from 'react-native';

const InfoCompte = () => {
  const [detailCompte, setDetailCompte] = useState();

  const fetchData = async () => {
    try {
      const data = await getRequest('/me');
      setDetailCompte(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!detailCompte) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>
        {detailCompte.nom} {detailCompte.prenom}
      </Text>
      <Text>Contact</Text>
      <Text>{detailCompte.ville}</Text>
      <Text>{detailCompte.email}</Text>
      <Text>{detailCompte.instagram}</Text>
      <Text>{detailCompte.tel}</Text>
    </View>
  );
};

export default InfoCompte;
