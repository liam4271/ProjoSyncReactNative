import {StyleSheet, View, Text } from 'react-native';
import React from 'react';



const FirstTitle = props =>  {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.titleUp}</Text>
            <Text style={styles.title}>{props.titleDown}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontFamily: "Satoshi",
        color: "#E3E3E1",
        
    },
    container: {
        marginBottom: 50,   
    }
  });

export default FirstTitle