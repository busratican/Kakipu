import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { windowWidth, windowHeight } from './Dimensions';


const BookDetails = ({results}) => {
  return (
    <View style={styles.containerStyle}>
      <ImageBackground source={require('../../assets/shelf.jpg')} resizeMode="cover" style={styles.image}>
        {Object.keys(results).length > 0 ? Object.values(results).map((item) => {
        console.log(item);
          return (
            <View style={{ marginBottom: 5 }}>
              <Card containerStyle={styles.cardStyle}>
                <Card.Image
                  style={styles.imageStyle}
                  source={{
                    uri: item.image
                  }}
                />

                <Button title='Kütüphaneme ekle' type='clear' style={{ justifyContent: 'center', alignSelf: 'center' }} titleStyle={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }} />
              </Card>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 150,
                    fontSize: 16,
                  },
                ]}>
                {item.title}
              </Text>
              <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                <Text style={[styles.textStyle, { alignSelf: 'center', margin: 10 }]}>
                {item.publisher}
                {item.isbn}
                {item.page}
                {item.authors[0]}
                {item.date_published}
                </Text>
              </View>
            </View>
          )

        }) : <></>}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 40,
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
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'column',
  },
  imageStyle: {
    width: 200,
    height: 250
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
