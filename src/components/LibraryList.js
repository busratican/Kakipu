import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Tab from './ProfileTabs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'Pürdikkat - Odaklanma Becerisini Nasil Yitirdik, Nasil Geri Kazanabiliriz?',
    img: 'https://www.yeniisfikirleri.net/wp-content/uploads/2019/08/18.png',
  },
];

const LibraryList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab
        style={styles.tabStyle}
        componentsLib={
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                <ImageBackground
                  source={require('../assets/shelf.jpg')}
                  resizeMode="cover"
                  style={styles.image}>
                  <Card containerStyle={styles.cardStyle}>
                    <Card.Image
                      style={styles.imageStyle}
                      source={{
                        uri: item.img,
                      }}></Card.Image>
                  </Card>
                </ImageBackground>
              );
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardStyle: {
    marginLeft: windowWidth / 4,
    marginTop: 100,
    padding: 0,
    borderLeftWidth: 8,
    borderTopWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
    marginBottom: 5,
    backgroundColor: 'transparent',
    width: 130,
    height: 200,
    alignSelf: 'center',
  },
  imageStyle: {
    width: 130,
    height: 200,
    alignSelf: 'center',
  },
  image: {
    marginTop: 30,
    width: windowWidth,
    height: 300,
    alignSelf: 'center',
  },
});

export default LibraryList;
