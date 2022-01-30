import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatList = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>

          <View style={styles.elem}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>ㅇㅇㅇ</Text>
            </View>
            <View style={styles.userComment}>
              <Text>ㅁㄴㅇㄹ</Text>
            </View>
          </View>

          <View style={styles.elem}>
            <View style={styles.userInfo}>
              <View style={styles.profile} />
              <Text style={styles.name}>ㅇㅇㅇ</Text>
            </View>
            <View style={styles.userComment}>
              <Text>ㅁㄴㅇㄹ</Text>
            </View>
          </View>

        </View>
        <View style={styles.footer} />
      </View>
    );
  };

export default ChatList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:60,
    backgroundColor:'#fff',
  },
  footer: {
    height:60,
    backgroundColor:'#fff',
  },
  content: {
    flex:1,
  },

  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
  }
});