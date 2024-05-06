import { StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ProjectPlus from '../../component/ProjectPlus';
import FirstTitle from '../../component/FirstTitle';

const Awards = () => {
    return (
        <ScrollView style={styles.container} >
            <ProjectPlus/>
            <FirstTitle titleUp="Awards"  />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
       marginHorizontal: 35,
    },

    containerFilter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    }

  });

export default Awards