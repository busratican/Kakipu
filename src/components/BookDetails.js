import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { windowWidth, windowHeight } from './Dimensions';
import SpecialButton from './Button';


const BookDetails = ({ results }) => {
  return (
    <View style={styles.containerStyle}>
      {Object.keys(results).length > 0 ? Object.values(results).map((item) => {
        return (
          <View style={styles.innerContainerStyle}>
            <Card containerStyle={styles.cardStyle}>
              {item.image != null && item.image != '' ? (<Card.Image
                style={styles.imageStyle}
                source={{ uri: item.image }}
              />) :
                (<Card.Image
                  style={styles.imageStyle}
                  source={require('../../assets/bookcover.jpg')}
                />)}
            </Card>
            <SpecialButton
              width={220}
              height={60}
              title="Kütüphaneme Ekle"
            />
            <View style={{ justifyContent: 'flex-start', flexDirection: 'column', flex: 1, marginTop: 10, marginBottom: 10 }}>
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
    marginTop: windowHeight / 20,
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
