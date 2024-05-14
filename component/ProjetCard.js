import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HeaderProjet from './HeaderProjet';
import ProfilProjet from './ProfilProjet';

const ProjetCard = ({ item, navigation }) => {
  const navigateToDetails = (item) => {
    navigation.navigate('monProjetDetails', { projetId: item.id });
  };
  return (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.container}>
        <HeaderProjet nomProjet={item.nom} statutProjet={item.statut} imageProjet={item.image} />
        <ProfilProjet />
      </View>
    </TouchableOpacity>
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

export default ProjetCard;
