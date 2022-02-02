import React,{useCallback, useState} from 'react'
import {View , Text ,Image, StyleSheet, useWindowDimensions,ScrollView,Button} from 'react-native';
import Logo from '../../../assets/images/bcu.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';
import {useNavigation} from '@react-navigation/native';
const SigninScreen =() => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const onChangeName = useCallback(text => {
        setUsername(text.trim());
      }, []);

      const onChangePassword = useCallback(text => {
        setPassword(text.trim());
      }, []);
    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    
    const onSignInPressed = () => {
        navigation.navigate('AppNavigator');
        //console.warn(username);
    };
    const onForgotpasswordpress = () => {
        navigation.navigate('ForgotPassword');
    };
    const onSignUppress = () => {
        navigation.navigate('SignUp');
    };
    const canGoNext = username && password;
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
            <Image
            source={Logo}
            style={[styles.Logo,{height: height*0.3}]}
            resizeMode="contain"
            />
            <CustomInput
             placeholder="아이디를 입력해주세요."
             Value={username} 
             setValue={setUsername}
             secureTextEntry={false}
             onChangeText={onChangeName}
             />
            <CustomInput
             placeholder="비밀번호를 입력해주세요." 
             Value={password} 
             setValue={setPassword}
             secureTextEntry={true}
             onChangeText={onChangePassword}
             />
            <CustomButton
            onPress={onSignInPressed}
            text={'로그인'}
            bgColor={canGoNext ? '#2e64e5' : 'grey'}
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
    loginButton: {
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      loginButtonActive: {
        backgroundColor: 'blue',
      },
});
export default SigninScreen
