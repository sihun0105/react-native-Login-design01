import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  const onMusicPressed = () => {
    navigation.navigate('Music');
  };
  const onprofilePressed = () => {
    console.warn('라이브러리에서 선택');
    //navigation.navigate('AppNavigator');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity onPress={() => onMusicPressed()}>
        <View>
          <Text style={styles.musicBar}>music</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>프로필 수정</Text>
      </View>
      <ScrollView>
        <View style={styles.userImgContainer}>
          <Image
            style={styles.userImg}
            source={require('../../../assets/images/profileBasicImage.png')}
          />
        </View>

        {/* <View style={styles.miniroom}>
          <Text>이름 :</Text>
          <Text>나이 :</Text>
          <Text>성별 :</Text>
          <Text>today 1512</Text>
          <Text>오늘의 기분 : 좋아요</Text>
        </View> */}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column', // 혹은 'column'
  //   backgroundColor: '#fff',
  //   padding: 20,
  //   borderWidth: 1,
  //   borderColor: 'blue',
  //   alignItems: 'center',
  // },
  container: {
    flexDirection: 'column', // 혹은 'column'
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  userImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  miniroom: {
    width: '100%',
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
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
    padding: 20,
    fontSize: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  rightcontainer: {
    flex: 1,
    margin: 30,

    // borderWidth: 1,
    // borderColor: 'red',
  },
  divider: {
    backgroundColor: '#e9ecef',
    height: 1,
    marginVertical: 6,
  },
});
