import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';





const Input = props =>  {
    return (
        <View >
            <TextInput
            style={[styles.input, { fontSize: props.fontSize }]}
            placeholder={props.placeholderInput}
            placeholderTextColor={props.placeholderColor}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    input: {
        fontFamily: "Archivo",
        color: "#E3E3E1",
    },
  });

export default Input