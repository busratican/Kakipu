import React, { useState, useContext } from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import SpecialButton from '../components/Button';
import SpecialInput from '../components/TextBox';
import KakipuImage from '../components/KakipuImage';
import SocialButton from '../components/SocialIconButton';
import { Context as AuthContext } from '../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const RegisterScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.containerStyle}>
                <KakipuImage marginBottom={windowHeight / 60} marginTop={windowHeight / 10} width={windowWidth / 1.8} height={windowHeight / 3} />
                <SpecialInput
                    errorMessage={' '}
                    hintText='e-posta'
                    IsSecureTextEntry={false}
                    onChangeText={setEmail}
                    value={email}
                />
                <SpecialInput
                    errorMessage={state.errorMessage}
                    hintText='şifre'
                    IsSecureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
                <SpecialButton
                    title="Kayıt ol"
                    onPress={() => signup({email, password, navigation})}
                    buttonColor='rgba(206, 244, 255, 0.8)'
                />
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginTop: 50 }}>
                    <Text style={styles.textStyle}>ya da hesaplarımdan biriyle devam et</Text>
                    <View style={styles.socialButtonContainerStyle}>
                        <SocialButton type="google" />
                        <SocialButton type="facebook" />
                        <SocialButton type="twitter" />
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    socialButtonContainerStyle: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textStyle: {
        color: '#000000',
        fontSize: 16,
        textShadowOffset: { width: -1, height: 1 },
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 1,
    }

})
export default RegisterScreen;