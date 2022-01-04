import React,{useState} from 'react'
import {View , Text , StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';

const ForgotPasswordScreen =() => {
    const {username,setUsername} = useState('');

    const onSendpressed = () => {
        console.warn("onSendpressed");
    };
    const onResendpress = () => {
        console.warn("onResendpress");
    };
    const onSignInpress = () => {
        console.warn("onSignInpress");
    };

    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>
            <CustomInput
             placeholder="Username"
             Value={username} 
             setValue={setUsername}
             secureTextEntry={false}
             />
             <CustomButton
            text={'Send'}
            onPress={onSendpressed}
            />
            <CustomButton
            text={"Back to Sign in"}
            onPress={onSignInpress}
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
    export default ForgotPasswordScreen
