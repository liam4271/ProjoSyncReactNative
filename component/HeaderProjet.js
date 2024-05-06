import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ThirdTitle from './ThirdTitle';

const HeaderProjet = ({ nomProjet, statutProjet, imageProjet }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageProjet }} style={styles.image} />
            <View>
                <ThirdTitle thirdTitle={nomProjet}/>
                <Text style={{ color: '#999999', fontSize: 12 }}>{statutProjet}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    image: {
        borderColor: "#000000",
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 5  
    }
});

export default HeaderProjet


