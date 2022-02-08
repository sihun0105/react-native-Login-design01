import React, {useCallback, useEffect} from 'react';
import {ScrollView, View, TouchableOpacity, StyleSheet, Switch, Text,Alert,Pressable}from  'react-native';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import {useAppDispatch} from '../../../store';
import userSlice from '../../../slices/user';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducer';
import EncryptedStorage from 'react-native-encrypted-storage';
const SettingScreen = () => {
    const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useAppDispatch();
  
  const onLogout = useCallback(async () => {
    try {
      await axios.post(
        `${Config.API_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      Alert.alert('알림', '로그아웃 되었습니다.');
      dispatch(
        userSlice.actions.setUser({
          name: '',
          email: '',
          accessToken: '',
        }),
      );
      await EncryptedStorage.removeItem('refreshToken');
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      console.error(errorResponse);
    }
  }, [accessToken, dispatch]);
    return (
        <ScrollView >
            <View >
                <View style={styles.row}>
                    <Text style={styles.title}>
                        PROFILE SETTINGS
                    </Text>
                </View>
                
                <View style={styles.row}>
                    <TouchableOpacity style={styles.section}>
                        <Text >
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.row}>
                    <TouchableOpacity style={styles.section}>
                        <Text >
                            Change Password
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.row}>
                    <Text style={styles.section}>
                        Send Push Notifications
                    </Text>
                    <Switch/>

                </View>
                
                <View style={styles.row}>
                    <Text style={styles.section}>
                        Refresh Automatically
                    </Text>

                    <Switch/>
                </View>
            </View>

            <View >
                <View style={styles.row}>
                    <Text style={styles.title}>
                      고객관리
                    </Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.section}>
                        <Text >
                            Help
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.section}>
                        <Text >
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.section}>
                        <Text >
                            Terms & Conditions
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.section} onPress={() => onLogout()}>
                        <Text >
                            Logout test
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
  title:{
      marginVertical: 25,
      fontSize:20,
      fontWeight:'bold',
  },  
  container: {
        backgroundColor: 'black'
    },
    header: {
        paddingVertical: 25
    },
    section: {
        marginVertical: 25
    },
    heading: {
        paddingBottom: 12.5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 17.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        alignItems: 'center'
    },
    rowButton: {
        flex: 1,
        paddingVertical: 24
    },
    switch : {
            marginVertical:
            14
    },
    text: {
        color: 'black'
    }
});
