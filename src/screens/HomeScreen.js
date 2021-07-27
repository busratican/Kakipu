import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Divider, Avatar} from 'react-native-elements';


const HomeScreen = () => {
    return (
        <View>
            <Avatar
                rounded
                source={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
            />
            <Divider orientation="horizontal" />
            <Text style={styles.textStyle}>Home Screen</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    textStyle: {
        fontSize: 42
    }

})
export default HomeScreen;