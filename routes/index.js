import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from '../screen/tabs';
import Login from '../screen/login/login';
import Loading from './loading';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName='loading'  screenOptions={{headerShown: false}}>
                <Stack.Screen name="app" component={BottomTabs} />   
                <Stack.Screen name="login" component={Login} />  
                <Stack.Screen name="loading" component={Loading} />  
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

});

export default Routes

