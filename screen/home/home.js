import {StyleSheet, View, Button, ScrollView} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTitle from '../../component/FirstTitle';
import BtnFilter from '../../component/BtnFilter';
import Research from '../../component/Research';
import SecondTitle from '../../component/SecondTitle';
import ProjectPlus from '../../component/ProjectPlus';
import Projet from '../../component/Projet';





const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} >
            <ProjectPlus/>
            <FirstTitle titleUp="Mes" titleDown="Projets" />
            <View style={styles.containerFilter}>
                <BtnFilter/>
                <Research/>
            </View>
            <SecondTitle secondTitle="Mis en avant" />
            <Projet navigation={navigation}/>
            <SecondTitle secondTitle="Contact" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
       marginHorizontal: 35,
    },

    containerFilter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    }

  });

export default Home







