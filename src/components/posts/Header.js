import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfilePicture from '../Sns/ProfilePicture';
import Entypo from 'react-native-vector-icons/Entypo';
import AppText from '../Sns/AppText';
import Colors from '../../config/Colors';

function Header({imageUrl, name, location}) {
  return (
    <View style={styles.container}>
      <ProfilePicture imageUrl={imageUrl} size={40} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.name} numberOfLines={1}>
          {name}
        </AppText>
        {location && (
          <AppText style={styles.location} numberOfLines={1}>
            {location}
          </AppText>
        )}
      </View>
      <Entypo name="dots-three-vertical" size={25} color={'#545454'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  detailsContainer: {
    marginHorizontal: 7,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
  },
});
export default Header;
