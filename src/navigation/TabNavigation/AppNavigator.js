import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import StoreScreen from '../../screens/StoreScreen/Store';
import ChatList from '../../screens/ChatList/ChatList';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{showLabel: true}} screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Home"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({size}) => (
          <Image
            source={require('../../../assets/images/splash.png')}
            style={{width: 30, height: 30, borderRadius: 15}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({size}) => (
          <Feather name="search" size={size} color={'#3d3d29'} />
        ),
      }}
    />
    <Tab.Screen
      name="SNS"
      component={HomeScreen}
      options={{
        tabBarIcon: ({size}) => (
          <Foundation name="shopping-bag" size={size} color={'#3d3d29'} />
        ),
      }}
    />
    <Tab.Screen
      name="CHAT"
      component={ChatList}
      options={{
        tabBarIcon: ({size}) => (
          <MaterialCommunityIcons
            name="movie-search-outline"
            size={size}
            color={'#3d3d29'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="STORE"
      component={StoreScreen}
      options={{
        tabBarIcon: ({size}) => (
          <AntDesign name="hearto" size={size} color={'#3d3d29'} />
        ),
      }}
    />
    <Tab.Screen
      name="SETTING"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({size}) => (
          <MaterialCommunityIcons
            name="server"
            size={size}
            color={'#3d3d29'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);console.warn("test");

export default AppNavigator;
