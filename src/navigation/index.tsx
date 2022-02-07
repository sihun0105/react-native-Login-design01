import * as React from 'react';
import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer'
import useSocket from '../../src/hooks/useSocket';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import StoreScreen from '../screens/StoreScreen/Store';
import ChatList from '../screens/ChatList/ChatList';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import ProfileStackScreen from '../screens/ProfileStackScreen/ProfileStackScreen';

export type LoggedInParamList = {
    Orders: undefined;
    Settings: undefined;
    Delivery: undefined;
    Complete: {orderId: string};
  };
  
  export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
  };
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Navigation(){
    const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
    console.log('isLoggedIn', isLoggedIn);
  
    const [socket, disconnect] = useSocket();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('!isLoggedIn', !isLoggedIn);
      disconnect();
    }
  }, [isLoggedIn, disconnect]);
    
  return isLoggedIn ?(
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Home"
      component={ProfileStackScreen}
      options={{
        //tabBarIcon: ({size}) => (
          //<Image
          //  source={require('../../../assets/images/splash.png')}
          //  style={{width: 30, height: 30, borderRadius: 15}}
          ///>
        //),
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
      component={SettingScreen}
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
  </NavigationContainer>
    ):(
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