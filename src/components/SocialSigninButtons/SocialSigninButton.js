import React from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native'
import CustomButton from '../CustomButton';


const SocialSigninButton =() =>{
    const onSigninApple = () => {
        console.warn("애플 로그인");
    };
    const onSigninGoogle = () => {
        console.warn("구글 로그인");
    };
    const onSigninFaceBook = () => {
        console.warn("페이스북 로그인");
    };
    return(
    <>
        <CustomButton
            onPress={onSigninFaceBook}
            text={'페이스북 로그인'}
            bgColor="#e7eaf4"
            fgColor="#4765a9"
            />
            <CustomButton
            onPress={onSigninGoogle}
            text={'구글 로그인'}
            bgColor="#fae9ea"
            fgColor="#dd4d44"
            />
            <CustomButton
            onPress={onSigninApple}
            text={'애플 로그인'}
            bgColor="#e3e3e3"
            fgColor="#363636"
            />
    </>
    );
};
export default SocialSigninButton