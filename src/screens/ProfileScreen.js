import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ProfileDetails from '../components/ProfileDetails';



const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <ProfileDetails
            book = {12}
            follow = {100}
            follower = {100}
            img = 'https://tr.web.img4.acsta.net/pictures/21/02/09/00/26/2473920.jpg'
            meetingInfo = "Bugün saat 14:00"
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },

});

export default ProfileScreen;