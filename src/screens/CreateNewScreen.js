import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import useResults from '../hooks/useResults';
import BookDetail from '../components/BookDetails';
import { windowWidth, windowHeight } from '../components/Dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../components/Button';
import DialogBox from '../components/DialogBox';
import { render } from 'react-dom';


const BookSearchScreen = () => {
  const [isbn, setIsbn] = useState('');
  const [visible, setVisible] = useState(false);

  const [searchApi, results, error] = useResults();
  console.log(visible);

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        term={isbn}
        onTermChanged={setIsbn}
        onTermSubmitted={searchApi}
      />
      {error ? <Text>{error}</Text> :
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            fontSize: 18, marginBottom: 50, fontWeight: 'bold',
            textShadowOffset: { width: -1, height: 1 },
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowRadius: 1, color: '#000000'
          }}>{Object.keys(results).length} adet kitap bulundu.</Text>
          <Button title="Göster" width={300} height={75} onPress={() => {
            setVisible(true);
          }} />
        </View>
      }
      { visible ? <DialogBox dialogTitle="Kitap" IsVisible={visible} buttonText="Kütüphaneme ekle"  results={results}/> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: windowHeight / 3,
    marginHorizontal: 10
  },
});

export default BookSearchScreen;
