import React, { useState, useContext } from 'react';
import {TouchableOpacity} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Context as BarcodeContext } from '../context/BarcodeContext';

const SearchBar = ({ term, onTermChanged, onTermSubmitted }) => {
  const { startbarcode } = useContext(BarcodeContext);

  return (
    <>
      <Input
        placeholder="ISBN numarasını girin veya taratın"
        rightIcon={
          <TouchableOpacity>
            <Icon name="barcode" size={40} type="font-awesome" onPress={() => {console.log('cliclked'); startbarcode()}} />
          </TouchableOpacity>

        }
        onChangeText={(newTerm) => onTermChanged(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onEndEditing={() => onTermSubmitted(term)}
      />

    </>
  );
};


export default SearchBar;
