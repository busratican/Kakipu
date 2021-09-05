import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { View, StyleSheet, Text } from 'react-native';
import useResults from '../hooks/useResults';
import Button from '../components/Button';
import DialogBox from '../components/DialogBox';
import RNETabs from '../components/RNETabs';
import {Icon} from 'react-native-elements';

const BookSearchScreen = ({ navigation }) => {
  const [isbn, setIsbn] = useState('');
  const [searchApi, results, error] = useResults();

  const renderButton = () => {
    let length = Object.keys(results).length;
    console.log(length);
    if (length > 0) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textStyle}>{length} adet kitap bulundu.</Text>
          <Button title="Göster" width={220} height={60} />
        </View>)
    }
  }
  return (
    <View style={{flex:1}}>
     <Icon 
     containerStyle={{marginTop: 50, marginLeft:10, alignSelf: 'flex-start'}}
     name='arrow-back'  
     type='material'  
     size={30}
     onPress={() => {navigation.navigate("HomeScreen")}} />
        <RNETabs components={
          <SearchBar
            term={isbn}
            onTermChanged={setIsbn}
            onTermSubmitted={searchApi}
            onPress = {() => navigation.navigate("BarCodeScanScreen")}
          />
        }
        >
          {error ? <Text>{error}</Text> : <></>}
          {renderButton()}
          <DialogBox dialogTitle="Kitap" results={results} />
        </RNETabs>
    </View>

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
