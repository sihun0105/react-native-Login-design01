import React from 'react'
import {View , Text, TextInput,StyleSheet } from 'react-native';

const CustomInput =({Value, setValue,placeholder,secureTextEntry}) => {
    return(
        <View style={Styles.container}>
            <TextInput
            value={Value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={Styles.input}
            secureTextEntry={secureTextEntry}
            maxLength={20}
            />
        </View>
        )
    }

    const Styles =StyleSheet.create({
        container:{
            backgroundColor:'white',
            width : '100%',

            borderColor:'#e8e8e8',
            borderWidth:1,
            borderRadius:5,

            paddingHorizontal: 10,
            marginVertical: 5,
        },
        input:{},
    });
    export default CustomInput
