import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Input from '../components/TextBox'
import { Avatar } from 'react-native-elements';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';

const ProfileSettingScreen = () => {
    let [selectedImage, setSelectedImage] = React.useState(null);

     let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (permissionResult.granted === false) {
                alert('Permission to access camera roll is required!');
                return;
            }

            let pickerResult = await ImagePicker.launchImageLibraryAsync();

            if (pickerResult.cancelled === true) {
                return;
            }

            setSelectedImage({ localUri: pickerResult.uri });
        };
    

    return (
        <ScrollView contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <Avatar size="xlarge" rounded source={{ uri: selectedImage }} title='BG' overlayContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }} containerStyle={{ marginBottom: 15 }} onPress={openImagePickerAsync} />
            <Input hintText="Kullanıcı adı" />
            <Input hintText="Görünen isim" />
            <Input hintText="Kendiniz hakkında bir şey yazın." />
            <Button title='Kaydet' width={250} height={70} />
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: 50,
        alignItems: 'center'
    }

})
export default ProfileSettingScreen;