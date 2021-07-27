import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SpecialButton = ({title, onPress, buttonColor}) => {
    return(
        <TouchableOpacity>
            <Button
                titleStyle = {styles.titleStyle}
                buttonStyle={[styles.buttonStyle, {backgroundColor: buttonColor}]}
                title = {title}
                onPress= {onPress}
                raised
                containerStyle = {styles.containerStyle}
                type= "outline"
            />
        </TouchableOpacity>
    )
}

const styles  = StyleSheet.create({
        containerStyle: {
            borderColor: '#000000',
            margin: 10,
            borderRadius: 20,
            width: windowWidth / 1.2,
            height: windowHeight / 10,
            justifyContent: 'center',
        },
        titleStyle: {
            color: '#000000',
            fontSize: 22,
            textShadowOffset: {width: -1, height: 1},
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowRadius: 1,
        },
        buttonStyle: {
            width: windowWidth / 1.2,
            height: windowHeight / 10,
            borderColor: '#000000',
            borderRadius: 20,
            borderWidth: 3,
            borderBottomWidth:6,
            alignItems: 'center'
        }
})


export default SpecialButton;