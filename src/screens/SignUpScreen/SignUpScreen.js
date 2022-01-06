import React,{useState} from 'react'
import {View , Text , StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen =() => {
    const {username,setUsername} = useState('');
    const {password,setPassword} = useState('');
    const {email,setEmail} = useState('');
    const {passwordRepeat,setPasswordRepeat} = useState('');
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
    const onSignInpress = () => {
        navigation.navigate('Signin');

    };

    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
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
             <CustomButton
            onPress={onRegisterpress}
            text={'Register'}
            />
             <SocialSigninButton></SocialSigninButton>
            
            <Text style={styles.text}>By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onpress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
            <Text style={styles.link} onpress={onPrivacyPressed}>Privacy Policy</Text></Text>

            
            <CustomButton
            onPress={onSignInpress}
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
    });
    export default SignUpScreen
