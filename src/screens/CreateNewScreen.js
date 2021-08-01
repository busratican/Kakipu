import React, { useState, useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import useResults from '../hooks/useResults';
import { windowWidth, windowHeight } from '../components/Dimensions';
import Button from '../components/Button';
import DialogBox from '../components/DialogBox';
import {Context as DialogContext} from '../context/DialogBoxContext';

const BookSearchScreen = () => {
  const [isbn, setIsbn] = useState('');
  const [searchApi, results, error] = useResults();
  const {state: {dialogvisible}, startdialog} = useContext(DialogContext);

  
  const renderButton = () => {
    let length = Object.keys(results).length;
    if (length > 0) {
      return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textStyle}>{length} adet kitap bulundu.</Text>
          <Button title="Göster" width={300} height={75} onPress={() => startdialog()} />
        </View>)
    }
  }
  return (
    <View style={styles.containerStyle}>
      <SearchBar
        term={isbn}
        onTermChanged={setIsbn}
        onTermSubmitted={searchApi}
      />
      {error ? <Text>{error}</Text> : <></>}
      {renderButton()}
      <DialogBox dialogTitle="Kitap" buttonText="Kütüphaneme ekle" results={results} />
     
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
  textStyle: {
    fontSize: 18,
    marginBottom: 50,
    fontWeight: 'bold',
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 1, color: '#000000'
  }
});

export default BookSearchScreen;
