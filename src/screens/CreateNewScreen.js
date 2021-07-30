import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import {View, StyleSheet, Text} from 'react-native';
import useResults from '../hooks/useResults';
import BookDetail from '../components/BookDetails';
import { windowWidth, windowHeight } from '../components/Dimensions';

const BookSearchScreen = () => {
    const [isbn, setIsbn] = useState('');
    const [searchApi, results, error] = useResults();

  return (
    <View style={styles.containerStyle}>
             <SearchBar
                term={isbn}
                onTermChanged={setIsbn}    
                onTermSubmitted = {searchApi} 
            />
            {error ? <Text>{error}</Text> : <Text>{results.length} adet bulundu.</Text>}
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
