import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Avatar, Divider, Card } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import LibraryList from './LibraryList';

const ProfileDetails = ({ img, book, follow, follower, meetingInfo, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicBarStyle}>
        <View style={{flexDirection: 'column'}}>
        <Avatar size="large" rounded source={{ uri: img }} />
        <Text style={{textAlign: 'center'}}> {name}</Text>
        </View>
       
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ marginLeft: 40, textAlign: 'center' }}>
              {book}
              {'\n'}kitap
        </Text>
            <Text style={{ marginLeft: 40, textAlign: 'center' }}>
              {follow}
              {'\n'}takipçi
        </Text>
            <Text style={{ marginLeft: 40 , textAlign: 'center'}}>
              {follower}
              {'\n'}takip
        </Text>
          </View>

        </View>

      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginLeft: 10 }}>
        <Text>
          {meetingInfo} <Text style={{ fontWeight: 'bold' }}>toplantıya</Text>{' '}
          katılıyor.
        </Text>
        <Text>
          Şu anda <Text style={{ fontWeight: 'bold' }}>Pürdikkat - Odaklanma Becerisini Nasil Yitirdik, Nasil Geri
            Kazanabiliriz?</Text> okuyorsunuz.
          </Text>

      </View>

      <View style={styles.meetingViewStyle}>
        <LibraryList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  profilePicBarStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 10
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
