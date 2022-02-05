import React,{useCallback, useState,useRef} from 'react'
import {View , Text ,Image, StyleSheet, useWindowDimensions,ScrollView,Button,Alert,TextInput} from 'react-native';
import Logo from '../../../assets/images/bcu.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';
import {useNavigation} from '@react-navigation/native';


const SigninScreen =() => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const onSubmit = () => {
        Alert.alert('알림', '로그인 성공');
        navigation.navigate('AppNavigator');
        //console.warn(username);
    };
    const onChangeName = useCallback(text => {
        setUsername(text.trim());
      }, []);

      const onChangePassword = useCallback(text => {
        setPassword(text.trim());
      }, []);
    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    
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
            <TextInput
          style={styles.container}
          onChangeText={onChangeName}
          placeholder="아이디를 입력해주세요."
          placeholderTextColor="#666"
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          value={username}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={usernameRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.container}
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          onChangeText={onChangePassword}
          value={password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onSubmitEditing={onSubmit}
        />
            <CustomButton
            onPress={onSubmit}
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
    container:{
        backgroundColor:'white',
        width : '100%',

        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
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
      textInput: {
        padding: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});
export default SigninScreen
