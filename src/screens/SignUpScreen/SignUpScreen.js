import React,{useState,useCallback} from 'react'
import {View , Text , StyleSheet, ScrollView,Pressable,Alert,ActivityIndicator} from 'react-native';
import CustomInput from '../../components/CustomInput';
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
            <CustomInput
             placeholder="Username"
             Value={username} 
             setValue={setUsername}
             secureTextEntry={false}
             />
            <CustomInput
             placeholder="Useremail" 
             Value={email} 
             setValue={setEmail}
             />
             <CustomInput
             placeholder="Userpassword" 
             Value={password} 
             setValue={setPassword}
             secureTextEntry={true}
             />
             <CustomInput
             placeholder="UserpasswordRepeat" 
             Value={passwordRepeat} 
             setValue={setPasswordRepeat}
             secureTextEntry={true}
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
