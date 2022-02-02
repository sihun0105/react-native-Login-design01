import React from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet,
    Switch,
    Text
} from 'react-native';
const SettingScreen = () => {
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
                    <TouchableOpacity style={styles.section}>
                        <Text >
                            Logout
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
