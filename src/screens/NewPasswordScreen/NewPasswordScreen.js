import React,{useState} from 'react'
import {View , Text , StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';

const NewPasswordScreen =() => {
    const {code,setCode} = useState('');
    const {newPassword,setNewPassword} = useState('');

    const onSubmitpressed = () => {
        console.warn("onSubmitpressed");
    };
    const onSignInpress = () => {
        console.warn("onSignInpress");
    };

    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>
            <CustomInput
             placeholder="Code"
             Value={code} 
             setValue={setCode}
             secureTextEntry={false}
             />
             <CustomInput
             placeholder="Enter your newpassword"
             Value={newPassword} 
             setValue={setNewPassword}
             secureTextEntry={false}
             />
             <CustomButton
            text={'Submit'}
            onPress={onSubmitpressed}
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
    export default NewPasswordScreen
