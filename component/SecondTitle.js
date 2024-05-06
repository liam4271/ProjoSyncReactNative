import {StyleSheet, View, Text } from 'react-native';
import React from 'react';



const SecondTitle = props =>  {
    return (
        <View >
            <Text style={styles.title}>{props.secondTitle}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: "Satoshi",
        color: "#E3E3E1",
        marginBottom: 15,
    },
  });

export default SecondTitle