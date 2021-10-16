import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ProfileDetails from '../components/ProfileDetails';
import {Icon} from 'react-native-elements';


const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.settingsView}>
         <Icon name='settings' type='Feather' size={25} onPress={()=>navigation.navigate("ProfileSettingScreen")}/>
      </View>
        <ProfileDetails
            book = {12}
            follow = {100}
            follower = {100}
            img = 'https://tr.web.img4.acsta.net/pictures/21/02/09/00/26/2473920.jpg'
            meetingInfo = "Bugün saat 14:00"
            name="Büşra GÜL"
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  settingsView: {
    alignSelf: 'flex-end',
    marginRight: 20
    
  }
});

export default ProfileScreen;