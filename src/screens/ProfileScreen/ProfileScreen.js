import React, {useState, useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import userSlice from '../../../slices/user';
import { RootState } from '../../../store/reducer';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ProfileScreen = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const name = useSelector((state: RootState) => state.user.name);
  const navigation = useNavigation();
  
  const onprofilePressed = () => {
    navigation.navigate('EditProfile');
};
  const onMusicPressed = () => {
  console.log(name);
    navigation.navigate('Music');
};
const onEditFriendPressed = () => {
  navigation.navigate('Friend');
};
  const onweblogpress = () => {
    navigation.navigate('Weblog');
};

const onDiarypress = () => {
  navigation.navigate('Diary');
};
const onalbumpress = () => {
  console.log({name});
  navigation.navigate('Album');
};
const onFollowpress = () => {
  navigation.navigate('Follow');
};
const onMiniroompress = () => {
  navigation.navigate('Miniroom');
}; 


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{name}님의 미니홈피</Text>
      </View>
      <TouchableOpacity onPress={() => onMusicPressed()}>
      <View style={styles.title}>
        <Text>music</Text>
      </View>
      </TouchableOpacity>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center',borderWidth: 1,
        borderColor: 'blue',}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.titlecontainer}>
          <View style={styles.leftcontainer}>
            <TouchableOpacity onPress={() => onprofilePressed()}>
              <Image style={styles.userImg} source={require('../../../assets/images/bcu.png')} />
            </TouchableOpacity>
          <Text style={styles.userName}>{name}</Text>
          {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
          <Text style={styles.aboutUser}>
          {email}
          </Text>
          </View>
          
          <View style={styles.rightcontainer}>
            <Text>이름 :</Text>
            <Text>나이 :</Text>
            <Text>성별 :</Text>
            <View style={{width:'100%',borderWidth:1,position:'absolute',bottom:0,flexDirection: 'row'}}>
              <Text style={{color:'red'}}>today 1512   </Text>

              <Text>오늘의 기분 : 좋아요</Text>
            </View>
          </View>
        
        </View>
        

        <View style={styles.userInfoWrapper}>
        <TouchableOpacity onPress={() => onEditFriendPressed()}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10</Text>
            <Text style={styles.userInfoSubTitle}>친구관리</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onFollowpress()}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onFollowpress()}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.userBtnWrapper}>
              <TouchableOpacity style={styles.userBtn} onPress={() => onDiarypress()}>
                <Text style={styles.userBtnTxt}>다이어리</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userBtn} onPress={() => onalbumpress()}>
                <Text style={styles.userBtnTxt}>사진첩</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.userBtn} onPress={() => onweblogpress()}>
                <Text style={styles.userBtnTxt}>방명록</Text>
              </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.miniroom} onPress={() => onMiniroompress()}>
        <View>
          <Text>미니룸</Text>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  titlecontainer: {
    flex: 1,
    flexDirection: 'row', // 혹은 'column'
  },
  leftcontainer: {
    flex:0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  rightcontainer: {
    flex:1,
    borderWidth: 1,
    borderColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  title:{
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'red',
  },
  titleText:{
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  miniroom: {
    width:'100%',
    height:150,
    justifyContent: 'space-around',
    alignItems:'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
  },
});