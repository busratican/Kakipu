import React, {useRef} from 'react';
import { StyleSheet, View , Animated} from 'react-native';
import LogoScreen from '../screens/KakipuLogoScreen';
import SpecialButton from '../components/Button';


const FirstOpenScreen = ({navigation}) => {
    const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    //const buttonBackgroundColor = 'rgba(206, 244, 255, 0.8)';

      React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }
        ).start();
      }, [fadeAnim])
    
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
    }
  
    return (
      <View style={styles.container}>
          <LogoScreen />
          <FadeInView style={styles.fadeViewStyle}>
              <SpecialButton title = "Giriş yap" onPress={ () => {navigation.navigate('LoginScreen')}} buttonColor = 'rgba(206, 244, 255, 0.8)' />
              <SpecialButton title = "Kayıt ol" onPress={() => {navigation.navigate('RegisterScreen')}}  />
        </FadeInView>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    fadeViewStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100
    }
  });
  

  export default FirstOpenScreen;