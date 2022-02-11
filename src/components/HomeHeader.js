import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeHeader(props) {
  return (
    <View style={styles.container}>
      <Feather name="camera" size={25} color={'#000'} />
      <Text
        style={styles.mainlogo}
        //source={require('../../assets/images/logo.png')} for img
        //resizeMode="contain"
        //style={{width: 135, height: 50}}
      >
        빅뱅-cafe ▶ll ♬
      </Text>
      <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  mainlogo: {
    fontSize: 25,
    color: 'black',
  },
});
export default HomeHeader;
