import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Switch,
  Text,
} from 'react-native';
const SettingScreen = () => {
  return (
    <ScrollView >
      <View >
        <View
          >
          <Text >
            PROFILE SETTINGS
          </Text>
        </View>
        <View >
          <TouchableOpacity >
            <Text >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity >
            <Text >
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <Text >
            Send Push Notifications
          </Text>
          <Switch
          />
          
        </View>
        <View >
          <Text >
            Refresh Automatically
          </Text>
    
          <Switch
          />
        </View>
      </View>

      <View >
        <View
          >
          <Text >
            SUPPORT
          </Text>
        </View>
        <View >
          <TouchableOpacity >
            <Text >
              Help
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity>
            <Text >
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity >
            <Text >
              Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity >
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
    container: {
        backgroundColor: 'black'
      },
      header: {
        paddingVertical: 25,
      },
      section: {
        marginVertical: 25,
      },
      heading: {
        paddingBottom: 12.5,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 17.5,
        borderBottomWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
      },
      rowButton: {
        flex: 1,
        paddingVertical: 24,
      },
      switch: {
        marginVertical: 14,
      },
      text: {
        color: 'black',
      },
  });
