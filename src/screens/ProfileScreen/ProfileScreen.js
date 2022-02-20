import React, {useState, useEffect, useContext} from 'react';
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
  const navigation = useNavigation();

  const onprofilePressed = () => {
    navigation.navigate('EditProfile');
  };
  const onMusicPressed = () => {
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
      <TouchableOpacity onPress={() => onMusicPressed()}>
        <View>
          <Text style={styles.musicBar}>music</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.title}>
        <Text style={styles.titleText}>ooo님의 미니홈피</Text>
      </View>
      <View style={styles.divider}></View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          // borderWidth: 1,
          // borderColor: 'blue',
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.titlecontainer}>
          <View style={styles.leftcontainer}>
            <Image
              style={styles.userImg}
              source={require('../../../assets/images/profileBasicImage.png')}
            />
            <Text style={styles.userName}>user name</Text>
            {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}

            <TouchableOpacity onPress={() => onprofilePressed()}>
              <Text style={styles.aboutUser}>프로필 편집</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rightcontainer}>
            <Text>이름 :</Text>
            <View style={styles.divider}></View>
            <Text>이메일 :</Text>
            <View style={styles.divider}></View>
            <Text>전화번호 :</Text>
            <View style={styles.divider}></View>
            <Text>생년월일 :</Text>
            <View style={styles.divider}></View>
            <Text>오늘의 기분 :</Text>
            <View style={styles.divider}></View>
            <Text>Today :</Text>
            <View style={styles.divider}></View>
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
              <Text style={styles.userInfoSubTitle}>팔로워</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onFollowpress()}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>100</Text>
              <Text style={styles.userInfoSubTitle}>팔로잉</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => onDiarypress()}>
            <Text style={styles.userBtnTxt}>다이어리</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => onalbumpress()}>
            <Text style={styles.userBtnTxt}>사진첩</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => onweblogpress()}>
            <Text style={styles.userBtnTxt}>방명록</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.miniroom}
          onPress={() => onMiniroompress()}>
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
    flex: 0.4,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  rightcontainer: {
    flex: 0.6,
    margin: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  divider: {
    backgroundColor: '#e9ecef',
    height: 1,
    marginVertical: 6,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  musicBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9881F',
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  titleText: {
    padding: 10,
    fontSize: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  userImg: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    // borderWidth: 1,
    margin: 10,
    // borderColor: 'red',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textDecorationLine: 'underline',
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtn: {
    borderColor: '#F9881F',
    backgroundColor: '#F9881F',
    // borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#fff',
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
    width: '100%',
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
  },
});
