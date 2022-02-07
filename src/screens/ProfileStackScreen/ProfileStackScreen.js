import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import EditProfile from '../EditProfile/EditProfile';
import Music from '../Music/Music';
import Friend from '../Friend/Friend';
import Diary from '../Diary/Diary';
import Album from '../Album/Album';
import Weblog from '../Weblog/Weblog';
import Follow from '../Follow/Follow';
import Miniroom from '../Miniroom/Miniroom';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Profile' component={ProfileScreen}/>
                <Stack.Screen name='EditProfile' component={EditProfile}/>
                <Stack.Screen name='Music' component={Music}/>
                <Stack.Screen name='Friend' component={Friend}/>
                <Stack.Screen name='Diary' component={Diary}/>
                <Stack.Screen name='Album' component={Album}/>
                <Stack.Screen name='Weblog' component={Weblog}/>
                <Stack.Screen name='Follow' component={Follow}/>
                <Stack.Screen name='Miniroom' component={Miniroom}/>
            </Stack.Navigator>
  );
};

export default ProfileStackScreen;
