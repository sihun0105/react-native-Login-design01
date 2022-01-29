import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import React from 'react';

const EditProfile = () => {
    const onprofilePressed = () => {
        console.warn('프로필 수정');
        //navigation.navigate('AppNavigator');
    };
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => onprofilePressed()}>
              <Image style={styles.userImg} source={require('../../../assets/images/bcu.png')} />
        </TouchableOpacity>
        <View style={styles.miniroom}>
            <Text>이름 :</Text>
            <Text>나이 :</Text>
            <Text>성별 :</Text>
            <Text>today 1512</Text>
            <Text>오늘의 기분 : 좋아요</Text>
        </View>
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // 혹은 'column'
      backgroundColor: '#fff',
      padding: 20,
      borderWidth: 1,
      borderColor: 'blue',
      alignItems: 'center',
    },
    userImg: {
      height: 300,
      width: 300,
      borderRadius: 150,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'red',
      justifyContent: 'space-around',
      alignItems:'center',
    },
    miniroom: {
      width:'100%', 
      height:150,
      justifyContent: 'space-around',
      alignItems:'center',
      marginTop: 30,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'green',
    },
  });
