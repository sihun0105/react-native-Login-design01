import React,{useState,useCallback,useRef} from 'react'
import {View , Text , StyleSheet, ScrollView,Pressable,Alert,ActivityIndicator,TextInput} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Config from 'react-native-config';

const SignUpScreen =() => {
    const [loading, setLoading] = useState(false);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [passwordRepeat,setPasswordRepeat] = useState('');
    
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRepeatRef = useRef(null);
    
    const onChangeuserName = useCallback(text => {
      setUsername(text.trim());
    }, []);

    const onChangePassword = useCallback(text => {
      setPassword(text.trim());
    }, []);
    const onChangeEmail = useCallback(text => {
      setEmail(text.trim());
    }, []);

    const onChangePasswordRepeat = useCallback(text => {
      setPasswordRepeat(text.trim());
    }, []);
    const navigation=useNavigation();
    const onRegisterpress = () => {
        console.warn("OnRegisterpress");
        navigation.navigate('ConfirmEmail');
    };
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    };
    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    };
    const onSubmit = useCallback(async () => {
        if (loading) {
          return;
        }
        if (!email || !email.trim()) {
          return Alert.alert('알림', '이메일을 입력해주세요.');
        }
        if (!username || !username.trim()) {
          return Alert.alert('알림', '이름을 입력해주세요.');
        } 
        if (!password || !password.trim()) {
          return Alert.alert('알림', '비밀번호를 입력해주세요.');
        }
        if (!password == !passwordRepeat.trim()) {
          return Alert.alert('알림', '비밀번호가 같지않습니다.');
        }
        if (
          !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
            email,
          )
        ) {
          return Alert.alert('알림', '올바른 이메일 주소가 아닙니다.');
        }
        if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,50}$/.test(password)) {
          return Alert.alert(
            '알림',
            '비밀번호는 영문,숫자,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야합니다.',
          );
        }
        console.log(email, username, password);
        try {
          setLoading(true);
          const response = await axios.post(`${Config.API_URL}/user`, {
            email,
            username,
            password,
          });
          console.log(response.data);
          Alert.alert('알림', '회원가입 되었습니다.');
          navigation.navigate('Signin');
        } catch (error) {
          const errorResponse = (error).response;
          console.error(errorResponse);
          if (errorResponse) {
            Alert.alert('알림', errorResponse.data.message);
          }
        } finally {
          setLoading(false);
        }
      }, [loading, navigation, email, username, password]);
      
      const canGoNext = email && username && password && passwordRepeat;
    
      
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
            <Text style={styles.title}>회원가입</Text>
            <TextInput
              style={styles.container}
              onChangeText={onChangeuserName}
              placeholder="이름를 입력해주세요."
              placeholderTextColor="#666"
              importantForAutofill="yes"
              //autoComplete=""
              textContentType="emailAddress"
              value={username}
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={usernameRef}
              onSubmitEditing={() => emailRef.current?.focus()}
              blurOnSubmit={false}
            />
            <TextInput
            style={styles.container}
            onChangeText={onChangeEmail}
            placeholder="이메일를 입력해주세요."
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
              onChangeText={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
              placeholderTextColor="#666"
              importantForAutofill="yes"
              autoComplete="password"
              textContentType="password"
              secureTextEntry
              value={password}
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={passwordRef}
              onSubmitEditing={() => passwordRepeatRef.current?.focus()}
              blurOnSubmit={false}
            />
            <TextInput
            style={styles.container}
            onChangeText={onChangePasswordRepeat}
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#666"
            importantForAutofill="yes"
            autoComplete="password"
            textContentType="password"
            secureTextEntry
            value={passwordRepeat}
            returnKeyType="next"
            clearButtonMode="while-editing"
            ref={passwordRepeatRef}
            onSubmitEditing={onSubmit}
            blurOnSubmit={false}
          />
             <View style={styles.buttonZone}>
        <Pressable
          style={
            canGoNext
              ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
              : styles.loginButton
          }
          disabled={!canGoNext || loading}
          onPress={onSubmit}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.loginButtonText}>회원가입</Text>
          )}
        </Pressable>
      </View>
             <SocialSigninButton></SocialSigninButton>
            
            <Text style={styles.text}>By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onpress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onpress={onPrivacyPressed}>Privacy Policy</Text></Text>

            
            <CustomButton
            onPress={onRegisterpress}
            text={"have an account? Sign in"}
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
        },
        title:{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#051c60',
            margin: 10,
        },
        text:{
            color:'gray',
            marginVertical: 10,
        },
        link:{
            color:'orange',
            marginVertical: 10,
        },
        buttonZone: {
            alignItems: 'center',
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
          loginButtonText: {
            color: 'white',
            fontSize: 16,
          },
    });
    export default SignUpScreen
