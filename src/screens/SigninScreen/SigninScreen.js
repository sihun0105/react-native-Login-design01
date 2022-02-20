import React,{useCallback, useState,useRef} from 'react'
import {View , Text ,Image, StyleSheet, useWindowDimensions,ScrollView,Button,Alert,TextInput,loading, Pressable, ActivityIndicator,} from 'react-native';
import Logo from '../../../assets/images/bcu.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios'; // {axioserror}뺌 js이기떄문에~ 나중에 ts넘어가서 에러 잡을꺼면 넣어야댐
import Config from 'react-native-config';
import {useAppDispatch} from '../../../store';
import userSlice from '../../../slices/user';


const SigninScreen =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigation = useNavigation(); 
  const {height} = useWindowDimensions();
  const dispatch = useAppDispatch();  
  
  const onSubmit = useCallback(async () => {
    if (loading) {
        return;
    }
    if (!email || !email.trim()) {
        return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!password || !password.trim()) {
        return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    try {
        setLoading(true);
        const response = await axios.post(`${Config.API_URL}/login`, {email, password});
        console.log(response.data);
        Alert.alert('알림', '로그인 되었습니다.');
        dispatch(
            userSlice.actions.setUser({
                name: response.data.data.name,
                email: response.data.data.email,
                accessToken: response.data.data.accessToken}),
        );
        await EncryptedStorage.setItem(
            'refreshToken',
            response.data.data.refreshToken,
        );
    } catch (error) {
        const errorResponse = (error).response;
        if (errorResponse) {
            Alert.alert('알림', errorResponse.data.message);
        }
    } finally {
        setLoading(false);
    }
}, [loading, dispatch, email, password]);

    const onChangeEmail = useCallback(text => {
        setEmail(text.trim());
      }, []);

      const onChangePassword = useCallback(text => {
        setPassword(text.trim());
      }, []);


    
    const onForgotpasswordpress = () => {
        navigation.navigate('ForgotPassword');
    };
    const onSignUppress = () => {
        navigation.navigate('SignUp');
    };
    
    const canGoNext = email && password;
    
    
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
          onChangeText={onChangeEmail}
          placeholder="아이디를 입력해주세요."
          placeholderTextColor="#666"
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          value={email}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={emailRef}
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
