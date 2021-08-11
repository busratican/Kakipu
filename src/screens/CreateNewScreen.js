import React, { useState, useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import useResults from '../hooks/useResults';
import { windowWidth, windowHeight } from '../components/Dimensions';
import Button from '../components/Button';
import DialogBox from '../components/DialogBox';
import { Context as DialogContext } from '../context/DialogBoxContext';

import RNETabs from '../components/RNETabs';

const BookSearchScreen = ({ navigation }) => {
  const [isbn, setIsbn] = useState('');
  const [searchApi, results, error] = useResults();
  const { state: { dialogvisible }, startdialog } = useContext(DialogContext);


  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  })


  const renderButton = () => {
    let length = Object.keys(results).length;
    console.log(length);
    if (length > 0) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textStyle}>{length} adet kitap bulundu.</Text>
          <Button title="Göster" width={220} height={60} onPress={() => startdialog()} />
        </View>)
    }
  }
  return (
    <>
        <RNETabs components={
          <SearchBar
            term={isbn}
            onTermChanged={setIsbn}
            onTermSubmitted={searchApi}
          />
        }>
          {error ? <Text>{error}</Text> : <></>}
          {renderButton()}
          <DialogBox dialogTitle="Kitap" results={results} />
        </RNETabs>
    </>

  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 50,
    fontWeight: 'bold',
    textShadowOffset: { width: -1, height: 1 },
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 1, color: '#000000'
  }
});

export default BookSearchScreen;
