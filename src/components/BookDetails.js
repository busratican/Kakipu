import React, {useContext} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { windowWidth, windowHeight } from './Dimensions';
import SpecialButton from './Button';


const BookDetails = ({ results }) => {

  return (
    <View style={styles.containerStyle}>

      {Object.keys(results).length > 0 ? Object.values(results).map((item) => {
        console.log(item);
        return (
          <View style={{ marginBottom: 40 }}>
            
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
              <ImageBackground source={require('../../assets/shelf.jpg')} resizeMode="cover" style={styles.image}>
                <Card containerStyle={styles.cardStyle}>
                  <Card.Image
                    style={styles.imageStyle}
                    source={{
                      uri: item.image
                    }}
                  />
                </Card>
              </ImageBackground>

              <View style={{ justifyContent: 'flex-start', flexDirection: 'column', flex: 1, marginTop: 30, marginBottom: 10 }}>
                <Text style={[styles.textStyle, { fontWeight: 'bold', marginVertical: 2, marginHorizontal: 30, fontSize: 16 }]}>
                  {item.title}
                </Text>
                <Text style={[styles.textStyle, { marginVertical: 2, marginHorizontal: 30 }]}>
                  Yazar: {item.authors[0]}
                </Text>
                <Text style={[styles.textStyle, { marginVertical: 2, marginHorizontal: 30 }]}>
                  Sayfa: {item.pages}
                </Text>
                <Text style={[styles.textStyle, { marginVertical: 2, marginHorizontal: 30 }]}>
                  Yayınevi: {item.publisher}
                </Text>
                <Text style={[styles.textStyle, { marginVertical: 2, marginHorizontal: 30 }]}>
                  Yayın Tarihi: {item.date_published}
                </Text>
                <Text style={[styles.textStyle, { marginVertical: 2, marginHorizontal: 30 }]}>
                  ISBN: {item.isbn}
                </Text>
              </View>
              <SpecialButton
                width={220}
                height={60}
                title="Kütüphaneme Ekle"
                onPress={() => { }}
              />
            </View>
          </View>
        )

      }) : <></>}

    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'column',
  },
  innerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'column',
  },
  cardStyle: {
    marginTop: windowHeight / 12.5,
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
    width: 200,
    height: 250,
    alignSelf: 'center'
  },
  imageStyle: {
    width: 200,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    margin: 2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2
  }
});

export default BookDetails;
