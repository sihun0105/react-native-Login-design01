import { View, Text,TouchableOpacity,StyleSheet,} from 'react-native';
import React from 'react';

const Follow = () => {
    return (
    <View style={styles.container}>
        <Text style={{fontSize:30}}>Follow 관리</Text>
        <View style={styles.title}>
          <Text style={{flex:1,textAlign: 'center',borderColor:'red',borderWidth:1}}>이름</Text>
          <Text style={{flex:1,textAlign: 'center',borderColor:'red',borderWidth:1}}>별명</Text>
          <Text style={{flex:1,textAlign: 'center',borderColor:'red',borderWidth:1}}>생일</Text>  
        </View>
        
        <View style={styles.miniroom}>
            <Text>BGM 편집 기능 추가/수정/삭제</Text>
        </View>
    </View>
  );
};

export default Follow;
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
