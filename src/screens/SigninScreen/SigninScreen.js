import React,{useState} from 'react'
import {View , Text ,Image, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import Logo from '../../../assets/images/bcu.png';
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
        navigation.navigate('AppNavigator');
    };
    const onForgotpasswordpress = () => {
        navigation.navigate('ForgotPassword');
    };
    const onSignUppress = () => {
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
            text={'로그인'}
            />
            <CustomButton
            onPress={onForgotpasswordpress}
            text={'비밀번호 찾기'}
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
            backgroundColor: '#ffe8d1',
        },
        Logo:{
            width : '70%',
            height : 200,
        },

    });
    export default SigninScreen
