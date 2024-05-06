import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ProfilProjet = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.item}>
                <Image source={{uri: 'https://fr.web.img6.acsta.net/r_1280_720/pictures/17/07/21/13/40/328477.jpg'}} style={styles.image} />
            </View>
            <View style={styles.item}>
                <Image source={{uri: 'https://fr.web.img6.acsta.net/r_1280_720/pictures/17/07/21/13/40/328477.jpg'}} style={styles.image} />
            </View>
            <View style={styles.item}>
                <Image source={{uri: 'https://fr.web.img6.acsta.net/r_1280_720/pictures/17/07/21/13/40/328477.jpg'}} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    item: {
        marginLeft: -5,

    },
    image: {
        borderColor: "#000000",
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 100 // Pour obtenir un cercle, utilisez la moitié de la largeur ou de la hauteur de l'image
    }
});

export default ProfilProjet;
