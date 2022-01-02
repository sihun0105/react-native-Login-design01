import React from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native'

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) =>{
    return(
        <Pressable onPress={onPress} 
        style={[
            Styles.container,
            Styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
             ]}>
            <Text
             style={[
                Styles.text,
                Styles[`text_${type}`],
                fgColor ? {color : fgColor} : {},
                ]}>
                    {text}
                    </Text>
        </Pressable>
    )
}
const Styles = StyleSheet.create({
    container:{
        width:'100%',
        
        padding:15,
        marginVertical:20,

        alignItems:'center',
        borderRadius:5,
    },
    container_PRIMARY:{
        backgroundColor: '#3b71f3',
    },
    container_TERTIARY:{},
    text:{
        fontWeight: 'bold',
        color:'white',
    },
    text_TERTIARY:{
        color:'gray',
    },
});
export default CustomButton