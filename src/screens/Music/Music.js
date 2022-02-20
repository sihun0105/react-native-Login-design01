import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const Music = () => {
  const onmusicinfoPressed = () => {
    console.warn('음악 정보');
    //navigation.navigate('AppNavigator');
  };
  return (
    <View>
      <View>
        <Text style={styles.musicBar}>music</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>현재 재생 곡</Text>
      </View>

      <TouchableOpacity
        style={styles.userImg}
        onPress={() => onmusicinfoPressed()}>
        <Image source={require('../../../assets/images/music1.png')} />
      </TouchableOpacity>

      <Text>재생/정지 버튼 볼륨조절</Text>
      <View style={styles.miniroom}>
        <Text>BGM 편집 기능 추가/수정/삭제</Text>
      </View>
    </View>
  );
};

export default Music;
const styles = StyleSheet.create({
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
    width: 250,
    height: 250,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
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
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
});
