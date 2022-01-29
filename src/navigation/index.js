import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AppNavigator from '../screens/mainNavigation/AppNavigator';
import NavigationTheme from '../screens/mainNavigation/NavigationTheme';
import EditProfile from '../screens/EditProfile/EditProfile';
import Music from '../screens/Music/Music';
import Friend from '../screens/Friend/Friend';
import Diary from '../screens/Diary/Diary';
import Album from '../screens/Album/Album';
import Weblog from '../screens/Weblog/Weblog';
import Follow from '../screens/Follow/Follow';
import Miniroom from '../screens/Miniroom/Miniroom';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Signin' component={SigninScreen}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
                <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='AppNavigator' component={AppNavigator}/>
                <Stack.Screen name='EditProfile' component={EditProfile}/>
                <Stack.Screen name='Music' component={Music}/>
                <Stack.Screen name='Friend' component={Friend}/>
                <Stack.Screen name='Diary' component={Diary}/>
                <Stack.Screen name='Album' component={Album}/>
                <Stack.Screen name='Weblog' component={Weblog}/>
                <Stack.Screen name='Follow' component={Follow}/>
                <Stack.Screen name='Miniroom' component={Miniroom}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation