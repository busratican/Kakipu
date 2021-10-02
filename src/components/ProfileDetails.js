import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar, Divider, Card } from 'react-native-elements';
import LibraryList from './LibraryList';

const ProfileDetails = ({ img, book, follow, follower, meetingInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicBarStyle}>
        <Text>
          {book}
          {'\n'}kitap
        </Text>
        <Text>
          {follow}
          {'\n'}takipçi
        </Text>
        <Text>
          {follower}
          {'\n'}takip
        </Text>
        <View style={styles.profilePicInfoStyle}>
          <Avatar size="large" rounded source={{ uri: img }} />
        </View>
      </View>

      <View style={styles.meetingViewStyle}>
        <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
          {meetingInfo} <Text style={{ fontWeight: 'bold' }}>toplantıya</Text>{' '}
          katılıyor.
        </Text>

        <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
            Şu anda <Text style={{ fontWeight: 'bold' }}>Pürdikkat - Odaklanma Becerisini Nasil Yitirdik, Nasil Geri
            Kazanabiliriz?</Text> okuyorsunuz.
          </Text>
          <LibraryList />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    justifyContent: 'flex-start',
  },
  profilePicBarStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  profilePicInfoStyle: {
    flexDirection: 'column',
  },
  meetingViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileDetails;
