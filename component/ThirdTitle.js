import {StyleSheet, View, Text } from 'react-native';
import React from 'react';



const ThirdTitle = props =>  {
    return (
        <View >
            <Text style={styles.title}>{props.thirdTitle}</Text>
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

export default ThirdTitle