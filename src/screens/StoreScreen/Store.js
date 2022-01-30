import { View, Text,TouchableOpacity,StyleSheet,FlatList,Image} from 'react-native';
import React,{useState} from 'react';
import Posts from '../../components/posts/Posts';
import UserPosts from '../../data/posts';
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
    <View style={styles.container}>
        <Text style={{fontSize:30}}>상점</Text>
        <View style={{flexDirection:'row',borderColor:'red',borderWidth:1,width:'100%'}}>
        <Text style={{flex:1,textAlign:'center'}}>미니룸</Text>
        <Text style={{flex:1,textAlign:'center'}}>미니미</Text>
        <Text style={{flex:1,textAlign:'center'}}>BGM</Text>
        </View>
        <View style={styles.title}>
        <FlatList style={styles.FlatList}
        data={images}
        renderItem={renderItem}
        numColumns={2}
      />
      </View>
    </View>
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
