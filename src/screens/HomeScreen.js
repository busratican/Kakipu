import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Divider, Avatar, Card, Button, Icon } from 'react-native-elements';
import { Dimensions } from 'react-native';
import SpecialButton from '../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <Text style={styles.textStyle}>KAKIPU</Text>
                    <Icon
                        size={30}
                        name='message1'
                        type='antdesign' />
                </View>
                <View style={styles.storyTabStyle}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity>
                            <Avatar
                                containerStyle={styles.avatarStyle}
                                size="large"
                                rounded
                                source={{
                                    uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                                }}
                            />
                            <Text style={styles.placeHolderStyle}>Hikaye ekle</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Avatar
                                containerStyle={styles.avatarStyle}
                                size="large"
                                rounded
                                source={{
                                    uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                                }}
                            />
                            <Text style={styles.placeHolderStyle}>busratican</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Avatar
                                containerStyle={styles.avatarStyle}
                                size="large"
                                rounded
                                source={{
                                    uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                                }}
                            />
                            <Text style={styles.placeHolderStyle}>ahmetdavutoglu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Avatar
                                containerStyle={styles.avatarStyle}
                                size="large"
                                rounded
                                source={{
                                    uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                                }}
                            />
                            <Text style={styles.placeHolderStyle}>iambusragul</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Avatar
                                containerStyle={styles.avatarStyle}
                                size="large"
                                rounded
                                source={{
                                    uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                                }}
                            />
                            <Text style={styles.placeHolderStyle}>ladydiana</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </View>
                <Card
                    containerStyle={styles.cardStyle}>
                    <Card.Title>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <Avatar
                                    containerStyle={{ marginRight: 2 }}
                                    size="medium"
                                    rounded
                                    source={{
                                        uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                                <Text>Büşra GÜL</Text>
                                <Text>@busratican - 10dk</Text>
                            </View>

                        </View>

                    </Card.Title>
                    <Card.Divider />
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
                        <Card.Image
                            style={{ width: 50, height: 75 }}
                            source={{
                                uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
                            }}>
                        </Card.Image>
                        <Text style={styles.cardTextStyle}>
                            The idea with React Native Elements is more about component structure than actual design.
                            The idea with React Native Elements is more about component structure than actual design.
                            The idea with React Native Elements is more about component structure than actual design.
                            The idea with React Native Elements is more about component structure than actual design.
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                    </View>
                    <Card.Divider />
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around' }}>
                        <TouchableOpacity>
                            <Icon
                                size={30}
                                name='message-circle'
                                type='feather' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                size={30}
                                name='retweet'
                                type='antdesign' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                size={30}
                                name='hearto'
                                type='antdesign' />
                        </TouchableOpacity>


                    </View>
                </Card>
            </View>
        </ScrollView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: 50,
        marginVertical: 5,
        marginHorizontal: 5
    },
    storyTabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    avatarStyle: {
        marginRight: 30
    },
    textStyle: {
        fontSize: 42
    },
    dividerStyle: {
        marginVertical: 5,
        color: 'rgba(0, 0, 0, 0.25)'
    },
    headerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 50
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        textShadowOffset: { width: -4, height: 4 },
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 1,
        justifyContent: 'center',
    },
    placeHolderStyle: {
        fontSize: 10,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginRight: 30
    },
    cardStyle: {
        marginVertical: 15,
        marginHorizontal: 5,
        width: windowWidth / 1.05,
        height: windowHeight / 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        borderColor: '#000000',
        borderRadius: 20,
        borderWidth: 3,
        borderBottomWidth: 6,
        elevation: 6,
    },
    cardTextStyle: {
        color: '#000000',
        fontSize: 14,
        textShadowOffset: { width: -1, height: 1 },
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowRadius: 1,
        flex: 1,
        marginLeft: 5
    }
})
export default HomeScreen;