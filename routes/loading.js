import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const isLoggedIn = false; // Replace with your authentication logic
    navigation.navigate(isLoggedIn ? 'login' : 'app');
  }, [navigation]);

  return <Text>Loading screen</Text>
};

export default Loading;