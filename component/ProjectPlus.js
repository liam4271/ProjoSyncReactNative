import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PlusAddProject from '../icon/PlusAddProject';

const ProjectPlus = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <PlusAddProject height={22} width={22} fill={'#1C1C1C'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
    },
    button: {
        alignSelf: 'flex-end', 
        backgroundColor: '#E3E3E1',
        padding: 15,
        borderRadius: 50,
    },
});

export default ProjectPlus;