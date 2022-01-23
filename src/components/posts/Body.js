import React from 'react';
import {StyleSheet, Image} from 'react-native';

function Body({imageUrl}) {
  return <Image source={imageUrl} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
export default Body;
