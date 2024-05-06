import {View, Text, ScrollView} from 'react-native';
import React from 'react';


const NewProject = () => {
    return (
        <ScrollView>
             <Input placeholderInput="Rechercher un projet" placeholderColor="#999999" fontSize="9" />
        </ScrollView>
    )
}

export default NewProject