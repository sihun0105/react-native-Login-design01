import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Colors from '../../config/Colors';
function ProfilePicture({imageUrl, size = 70}) {
  return (
    <View style={[styles.container, {width: size + 10, height: size + 10}]}>
      <Image
        source={imageUrl}
        style={[styles.image, {width: size, height: size}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.purple,
    borderRadius: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
});
export default ProfilePicture;
