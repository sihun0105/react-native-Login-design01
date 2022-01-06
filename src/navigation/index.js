import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation