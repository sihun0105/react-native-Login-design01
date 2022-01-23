import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';

function ProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppText>Profile Screen </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#9a19c2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProfileScreen;
