import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation';
import {Provider} from "react-redux";
import store from './store';

const App = () => {
  return (
    <Provider store ={store}>
    <SafeAreaView style={styles.root}>
     <Navigation/>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor:'#f9fbfc',
  }
});

export default App;
