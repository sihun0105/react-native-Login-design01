import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';

function ReelsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppText>Reels Screen</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#0066ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ReelsScreen;
