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
import Logo from '../../../assets/images/bcu.png';

const ProfileScreen = () => {
  const logout = () => {
    console.warn('logout test');
    //navigation.navigate('AppNavigator');
};
const edit = () => {
  console.warn('edit test');
  //navigation.navigate('AppNavigator');
};
const follow = () => {
  console.warn('follow test');
  //navigation.navigate('AppNavigator');
};
const message = () => {
  console.warn('message test');
  //navigation.navigate('AppNavigator');
};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image style={styles.userImg}
            source={Logo}
            //resizeMode="contain"
            />
        <Text style={styles.userName}>user name</Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>
        aboutuser
        </Text>
        <View style={styles.userBtnWrapper}>
              <TouchableOpacity style={styles.userBtn} onPress={() => message()}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.userBtn} onPress={() => follow()}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userBtn} onPress={() => edit()}>
                <Text style={styles.userBtnTxt}>Edit</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
        </View>

        <View style={styles.userInfoWrapper}>
          
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fff',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
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
});