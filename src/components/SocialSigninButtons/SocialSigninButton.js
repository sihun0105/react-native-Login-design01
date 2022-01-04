import React from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native'
import CustomButton from '../CustomButton';


const SocialSigninButton =() =>{
    const onSigninApple = () => {
        console.warn("Sign in Apple");
    };
    const onSigninGoogle = () => {
        console.warn("Sign in Google");
    };
    const onSigninFaceBook = () => {
        console.warn("Sign in Facebook");
    };
    return(
    <>
        <CustomButton
            onPress={onSigninFaceBook}
            text={'Sign in with Facebook'}
            bgColor="#e7eaf4"
            fgColor="#4765a9"
            />
            <CustomButton
            onPress={onSigninGoogle}
            text={'Sign in with Google'}
            bgColor="#fae9ea"
            fgColor="#dd4d44"
            />
            <CustomButton
            onPress={onSigninApple}
            text={'Sign in with Apple'}
            bgColor="#e3e3e3"
            fgColor="#363636"
            />
    </>
    );
};
export default SocialSigninButton