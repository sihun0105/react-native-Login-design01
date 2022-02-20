import { View, Text,TouchableOpacity,StyleSheet,FlatList,Image} from 'react-native';
import React,{useState} from 'react';
import 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import toolStore from '../../screens/StoreScreen/toolStore';
import minimeStore from '../../screens/StoreScreen/minimeStore';
import musicStore from '../../screens/StoreScreen/musicStore';

const Tab = createMaterialTopTabNavigator();

function renderItem({item}){
  return <Image
  source={{uri:item}}
  style={{height:160,width:160,margin:10}}
  />;
}
const imageArr = new Array(20).fill("https://t1.daumcdn.net/cfile/tistory/1834CF0E49DB630963")
const Store = () => { 
  const [images, setImages] =useState(imageArr);
  return (
    <Tab.Navigator>
      <Tab.Screen name="가구" component={toolStore} />
      <Tab.Screen name="미니미" component={minimeStore} />
      <Tab.Screen name="음악" component={musicStore} />
    </Tab.Navigator>
  );
};

export default Store;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // 혹은 'column'
      backgroundColor: '#fff',
      padding: 20,
      borderWidth: 1,
      borderColor: 'green',
      alignItems: 'center',
    },
    title:{
      flexDirection: 'row', // 혹은 'column'
      flex: 1,
    },
    FlatList:{
      flex:1,
      borderColor:'red',
      borderWidth:1,
    }
  });
