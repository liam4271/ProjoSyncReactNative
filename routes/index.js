import { View, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from '../screen/tabs';
import Login from '../screen/login/login';
// import Loading from './loading';
import { useAuthContext } from '../context/AuthContext';
import Register from '../screen/register/register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const { isLoggedIn, verifyLogin } = useAuthContext();
  useEffect(() => {
    try {
      verifyLogin();
    } catch (err) {
      console.log(err);
    }
  }, []);
  if (isLoggedIn === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="app" component={BottomTabs} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} options={{ contentStyle: { backgroundColor: '#1C1C1C' } }} />
            <Stack.Screen
              name="register"
              component={Register}
              options={{ contentStyle: { backgroundColor: '#1C1C1C' } }}
            />
          </>
        )}
        {/* <Stack.Screen name="loading" component={Loading} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Routes;
