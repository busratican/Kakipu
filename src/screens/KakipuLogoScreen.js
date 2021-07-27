import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import KakipuImage from '../components/KakipuImage';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LogoComponent = () => {

    return (
        <View style={styles.container}>
            <KakipuImage marginTop={windowHeight / 12} width={windowWidth / 1.2} height={windowHeight / 2} />
            <Text style={styles.textStyle}>KAKIPU</Text>
        </View>
        ) 
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 42,
        fontWeight: 'bold',
        textShadowOffset: { width: -4, height: 4 },
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 1,
        justifyContent: 'center',
    }

})
export default LogoComponent;