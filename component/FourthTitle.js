import {StyleSheet, View, Text } from 'react-native';
import React from 'react';



const FourthTitle = props =>  {
    return (
        <View >
            <Text style={styles.title}>{props.fourthTitle}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontFamily: "Satoshi",
        color: "#E3E3E1",
    },
  });

export default FourthTitle