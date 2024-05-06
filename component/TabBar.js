import React from 'react'; 
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
import ProjetNav from '../icon/ProjetNav';
import AwardsNav from '../icon/AwardsNav';
import DiscoverNav from '../icon/DiscoverNav';
import UserNav from '../icon/UserNav';

const { width } = Dimensions.get('window')

const icons = {
  home: <ProjetNav height={22} width={22} fill={'#999'}/>,
  award: <AwardsNav height={22} width={22} fill={'#999'} />,
  decouvrir: <DiscoverNav height={22} width={22} fill={'#999'}/>,
  compte: <UserNav height={22} width={22} fill={'#999'}/>,
};

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label == "decouvrir" ? 3 : 0 }]}>
            <Pressable
              onPress={onPress}
              style={{ backgroundColor: isFocused ? "#030D16" : "#182028", borderRadius: 20, }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                {icons[label]}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}




const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: "#182028",
    borderRadius: 25,
    marginHorizontal: 35,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
    borderRadius: 1, 
    borderColor: "#333B42"
  }, 
})


export default TabBar; 