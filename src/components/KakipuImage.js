import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Image } from 'react-native-elements';


const KakipuImage = ({marginBottom,marginTop, width, height}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
          <Image
                style={[styles.logoStyle, {marginBottom: marginBottom, marginTop: marginTop, width: width, height:height}]}
                source={require('../../assets/logo200px.png')}
                onLoadEnd={() => setIsImageLoaded(true)}
            />
    )
  
}

const styles = StyleSheet.create({
    logoStyle: {
        padding: 5,
        justifyContent: 'flex-start'
    }

})
export default KakipuImage;