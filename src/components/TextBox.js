import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';


const SpecialTextBox = ({ onChangeText, value, hintText, errorMessage, IsSecureTextEntry }) => {

    return (

        <Input
            value={value}
            onChangeText={onChangeText}
            placeholder={hintText}
            errorStyle={styles.errorStyle}
            secureTextEntry={IsSecureTextEntry}
            containerStyle={styles.formInput}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorMessage}
            autoCapitalize="none"
            autoCorrect={false}
        />
    )

}

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderRadius:10,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        borderColor: '#000',
        borderWidth: 2,
        borderBottomWidth:4,
        padding: 5,
    },
    formInput: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    errorStyle: {
        fontSize: 12,
        textShadowOffset: {width: -1, height: 1},
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 1,
    }
});


export default SpecialTextBox;