import {View, Text, Button} from 'react-native';
import React from 'react';

const Compte = ({ navigation }) => {
    return (
        <View >
            <Text> Compte </Text>
            <Button
            title="Go to Details... again"
            onPress={() => navigation.navigate('newProject')}
            />
        </View>
    )
}

export default Compte