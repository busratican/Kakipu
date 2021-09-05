import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Input, Icon } from 'react-native-elements';

const SearchBar = ({ term, onTermChanged, onTermSubmitted, onPress }) => {

  return (  
      <Input
        placeholder="ISBN numarasını girin veya taratın"
        rightIcon={
          <TouchableOpacity>
            <Icon name="barcode" size={40} type="font-awesome" onPress = {onPress} />
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
