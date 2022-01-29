import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';

function Store(props) {
  return (
    <Screen style={styles.screen}>
      <AppText>Store Screen</AppText>
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
export default Store;
