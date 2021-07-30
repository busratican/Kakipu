import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Card, Image, Input, Icon } from 'react-native-elements';

const SearchBar = ({ term, onTermChanged, onTermSubmitted }) => {
  return (
      <Input
        placeholder="ISBN numarasını girin veya taratın"
        rightIcon={
          <TouchableOpacity>
            <Icon name="barcode" size={30} type="antdesign" />
          </TouchableOpacity>
        }
        onChangeText={(newTerm) => onTermChanged(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onEndEditing={() => onTermSubmitted(term)}
      />
  );
};


export default SearchBar;
