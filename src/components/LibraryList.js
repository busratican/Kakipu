import React from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Card} from 'react-native-elements';
import Tab from './ProfileTabs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'Pürdikkat - Odaklanma Becerisini Nasil Yitirdik, Nasil Geri Kazanabiliriz?',
    img: 'https://cdn.1000kitap.com/resimler/kitaplar/246583_e06c4_1596905721.jpg',
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
                  <Card containerStyle={styles.cardStyle}>
                    <Card.Image
                      style={styles.imageStyle}
                      source={{
                        uri: item.img,
                      }}></Card.Image>
                  </Card>
              );
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabStyle: {
    justifyContent: 'flex-start',
  },
  cardStyle: {
    marginLeft: windowWidth / 4,
    marginTop: 5,
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
  },
  image: {
    marginTop: 30,
    width: windowWidth,
    height: 300,
  },
});

export default LibraryList;
