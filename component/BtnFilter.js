import {StyleSheet, View, Text} from 'react-native';
import React from 'react';



const BtnFilter = () =>  {
    return (
        <View >
            <Text style={styles.title}>Filtrer +</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        fontFamily: "Archivo",
        color: "#E3E3E1",
    
    },
  });

export default BtnFilter