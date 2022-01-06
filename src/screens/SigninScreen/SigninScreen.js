import React,{useState} from 'react'
import {View , Text ,Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import Logo from '../../../assets/images/download.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';
import {useNavigation} from '@react-navigation/native';

const SigninScreen =() => {
    const {username,setUsername} = useState('');
    const {password,setPassword} = useState('');
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
        navigation.navigate('HomeScreen');
    };
    const onForgotpasswordpress = () => {
        console.warn("Forgot password");
        navigation.navigate('ForgotPassword');
    };
    const onSignUppress = () => {
        console.warn("onSignUpPress");
        navigation.navigate('SignUp');
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
           <SocialSigninButton></SocialSigninButton>
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
