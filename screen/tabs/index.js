import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Awards from '../awards/awards';
import Decouvrir from '../decouvrir/decouvrir';
import Compte from '../compte/compte';
import TabBar from '../../component/TabBar';
import NewProject from '../home/newProject';
import Home from '../home/home';
import MonProjetDetails from '../home/MonProjetDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Example stack for the Home tab
const HomeStack = () => (
  <Stack.Navigator screenOptions={{contentStyle:{backgroundColor: "#1C1C1C"}}}>
    <Stack.Screen name="projetScreen" component={Home} />
    <Stack.Screen name="newProject" component={NewProject} />
    <Stack.Screen name="monProjetDetails" component={MonProjetDetails} />
  </Stack.Navigator>
);

// Example stack for the Award tab
const AwardStack = () => (
  <Stack.Navigator screenOptions={{contentStyle:{backgroundColor: "#1C1C1C"}}}>
    <Stack.Screen name="awardScreen" component={Awards} />
    {/* Add more screens within the Award stack if needed */}
  </Stack.Navigator>
);

// Example stack for the Decouvrir tab
const DecouvrirStack = () => (
  <Stack.Navigator screenOptions={{contentStyle:{backgroundColor: "#1C1C1C"}}}>
    <Stack.Screen name="decouvrirScreen" component={Decouvrir} />
    {/* Add more screens within the Decouvrir stack if needed */}
  </Stack.Navigator>
);

// Example stack for the Compte tab
const CompteStack = () => (
  <Stack.Navigator screenOptions={{contentStyle:{backgroundColor: "#1C1C1C"}}}>
    <Stack.Screen name="compteScreen" component={Compte} />
    {/* Add more screens within the Compte stack if needed */}
  </Stack.Navigator>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="home" tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false } }>
      <Tab.Screen name="home" component={HomeStack} />
      <Tab.Screen name="award" component={AwardStack} />
      <Tab.Screen name="decouvrir" component={DecouvrirStack} />
      <Tab.Screen name="compte" component={CompteStack} />
    </Tab.Navigator>
  );
};

export default BottomTabs;