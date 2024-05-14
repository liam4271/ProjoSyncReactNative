import { View, Text, ScrollView, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import { getRequest } from '../../config/API';
import { useFocusEffect } from '@react-navigation/native';
import ProjetCard from '../../component/ProjetCard';
import FirstTitle from '../../component/FirstTitle';
import ProjectPlus from '../../component/ProjectPlus';

const Decouvrir = ({ navigation }) => {
  const [allProjets, setAllProjets] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getRequest('/projet');
      setAllProjets(data);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );
  if (allProjets.length === 0) {
    return <Text>Pas de projets</Text>;
  }
  const render = (item) => {
    return <ProjetCard item={item.item} navigation={navigation} />;
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ProjectPlus navigation={navigation} />
        <FirstTitle titleUp="Découvrir" titleDown="" />
        <Text>Tous les projets</Text>
        <FlatList
          horizontal={true}
          data={allProjets}
          renderItem={render}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create();
export default Decouvrir;
