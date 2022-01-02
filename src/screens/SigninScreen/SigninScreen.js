import React,{useState} from 'react'
import {View , Text ,Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import Logo from '../../../assets/images/download.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SigninScreen =() => {
    const {username,setUsername} = useState('');
    const {password,setPassword} = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    };
    const onForgotpasswordpress = () => {
        console.warn("Forgot password");
    };
    const onSigninApple = () => {
        console.warn("Sign in Apple");
    };
    const onSigninGoogle = () => {
        console.warn("Sign in Google");
    };
    const onSigninFaceBook = () => {
        console.warn("Sign in Facebook");
    };
    const onSignUppress = () => {
        console.warn("onSignUpPress");
    };

    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
            <Image
            source={Logo}
            style={[styles.Logo,{height: height*0.3}]}
            resizeMode="contain"
            />
            <CustomInput
             placeholder="Username"
             Value={username} 
             setValue={setUsername}
             secureTextEntry={false}
             />
            <CustomInput
             placeholder="Userpassword" 
             Value={password} 
             setValue={setPassword}
             secureTextEntry={true}
             />
            <CustomButton
            onPress={onSignInPressed}
            text={'Sign in'}
            />
            <CustomButton
            onPress={onForgotpasswordpress}
            text={'Forgot password'}
            type="TERTIARY"
            />
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
            <CustomButton
            onPress={onSignUppress}
            text={"Don't have an account? Create one"}
            type="TERTIARY"
            />
        </View>
        </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        root:{
            alignItems : 'center',
            padding:20,
        },
        Logo:{
            width : '70%',
            height : 200,
        },

    });
    export default SigninScreen
