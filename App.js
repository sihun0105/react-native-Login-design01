/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Navigation from './src/navigation';
import SigninScreen from './src/screens/SigninScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotpasswordScreen from './src/screens/ForgotpasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <ForgotpasswordScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor:'#f9fbfc',
  }
});

export default App;
