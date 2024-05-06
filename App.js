import { useFonts } from "expo-font";
import React from 'react';
import { Text, View } from 'react-native';
import Routes from './routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Satoshi": require("./assets/font/Satoshi-Variable.ttf"),
    "Archivo": require("./assets/font/Archivo-Variable.ttf"),
  });

  // Attendez que les polices soient chargées
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Les polices sont chargées, vous pouvez rendre le reste de votre application
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1C' }}>
      <Routes />
    </View>
  );
}

