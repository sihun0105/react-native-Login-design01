import { View, Text,TouchableOpacity,StyleSheet,Image,SafeAreaView,Button} from 'react-native';
import React,{useState} from 'react'
import hat from '../../data/hat'
import coat from '../../data/coat'
import shose from '../../data/shose'
const Miniroom = () => {
  const [imageVar, setImageVar] = useState(0);  
  const changehat=()=> {
    imageVar == (hat.length - 1) ? setImageVar(0) : setImageVar(imageVar + 1);
    console.log(hat[imageVar].image);
  }
  const changecoat=()=> {
    imageVar == (coat.length - 1) ? setImageVar(0) : setImageVar(imageVar + 1);
    console.log(coat[imageVar].image);
  }
  const changeshose=()=> {
    imageVar == (shose.length - 1) ? setImageVar(0) : setImageVar(imageVar + 1);
    console.log(shose[imageVar].image);
  }
  const test=()=>{
    imageVar == (hat.length - 1) ? setImageVar(0) : setImageVar(2);
  }
  return (
    <View style={styles.container}>
        <Text style={{fontSize:30}}>미니룸</Text>
      
        <View style={styles.miniroom}>
        <Image style={{height: 100, width: 100,borderWidth:1,borderColor:'red',flex:1}} resizeMode="contain" source={hat[imageVar].imageUrl}/>
        <Image style={{height: 100, width: 100,borderWidth:1,borderColor:'red',flex:1}} resizeMode="contain" source={coat[imageVar].imageUrl}/>
        <Image style={{height: 100, width: 100,borderWidth:1,borderColor:'red',flex:1}} resizeMode="contain" source={shose[imageVar].imageUrl}/>
        <Image style={{height: 100, width: 100,borderWidth:1,borderColor:'red',flex:1}} resizeMode="contain" source={hat[imageVar].imageUrl}/>
        <Image style={{height: 100, width: 100,borderWidth:1,borderColor:'red',flex:1}} resizeMode="contain" source={coat[imageVar].imageUrl}/>
        <Image style={{height: 100, width: 100,borderWidth:1,borderColor:'red',flex:1}} resizeMode="contain" source={shose[imageVar].imageUrl}/>
      </View>
        
        
        <View style={styles.miniroom} >
            <Text>보유한 아이템</Text>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={test}>
            <Image style={{height: 70, width: 70,borderWidth:1,borderColor:'red',}} resizeMode="contain" source={hat[0].imageUrl} />
            </TouchableOpacity>
            <Image style={{height: 70, width: 70,borderWidth:1,borderColor:'red',}} resizeMode="contain" source={hat[1].imageUrl}/>
            <Image style={{height: 70, width: 70,borderWidth:1,borderColor:'red',}} resizeMode="contain" source={hat[2].imageUrl}/>

            </View>
            <Button onPress={(changehat,changecoat,changeshose)}
          title="Change Pic" />
            <View style={{borderWidth:1,borderColor:'blue'}}></View>
        </View>
    </View>
  );
};

export default Miniroom;
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
    title:{
      flexDirection: 'row', // 혹은 'column'
      flex: 1,
    },
    miniroom: {
      width:'100%', 
      height:230,
      justifyContent: 'space-around',
      alignItems:'center',
      marginTop: 30,
      //paddingVertical: 8,
      //paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: 'green',
    },
  });
