import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Input from './Input';
import ResearchIcon from '../icon/ResearchIcon';



const Research = () =>  {
    return (
        <View style={styles.container} >
            <Input placeholderInput="Rechercher un projet" placeholderColor="#999999" fontSize="9" />
            <ResearchIcon height={10} width={10} fill={'#999999'} />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 45,
        width: "50%",
        borderBottomColor: "#999999",
        borderBottomWidth: 1,
        paddingBottom: 4,
        
    },
  });

export default Research