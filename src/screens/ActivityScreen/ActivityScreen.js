import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';

function ActivityScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppText>Activity Screen</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f0d507',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ActivityScreen;
