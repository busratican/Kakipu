import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar, Divider, Card } from 'react-native-elements';
import LibraryList from '../components/LibraryList';

const Profile = ({ img, book, follow, follower, meetingInfo }) => {
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
        <Text style={{ alignSelf: 'left', marginLeft: 5 }}>
          {meetingInfo} <Text style={{ fontWeight: 'bold' }}>toplantıya</Text>{' '}
          katılıyor.
        </Text>

        <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text style={{ alignSelf: 'left', marginLeft: 5 }}>
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
    flexDirection: 'flex-start',
    padding: 24,
    justifyContent: 'center',
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

export default Profile;
