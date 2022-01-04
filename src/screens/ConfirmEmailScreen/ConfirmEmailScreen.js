import React,{useState} from 'react'
import {View , Text , StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButton from '../../components/SocialSigninButtons/SocialSigninButton';

const ConfirmEmailScreen =() => {
    const {code,setCode} = useState('');

    const onConfirmpressed = () => {
        console.warn("onConfirmpressed");
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
            <Text style={styles.title}>ConfirmEmailScreen</Text>
            <CustomInput
             placeholder="Enter your confirmation code"
             Value={code} 
             setValue={setCode}
             secureTextEntry={false}
             />
             <CustomButton
            text={'Confirm'}
            onPress={onConfirmpressed}
            />
            <CustomButton
            text={"Besend code"}
            onPress={onResendpress}
            type="SECONDARY"
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
    export default ConfirmEmailScreen
