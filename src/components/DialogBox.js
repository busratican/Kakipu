import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Dialog, { DialogFooter, DialogButton, DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import BookDetails from './BookDetails';


const DialogBox = ({ IsVisible, dialogTitle, buttonText, onPress, results }) => {

    console.log("IsVisible: " + IsVisible);
    return (
        <View>
            <Text>Returned</Text>
            <Dialog
                visible={IsVisible}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogTitle={<DialogTitle title={dialogTitle} />}
                footer={
                    <DialogFooter>
                        <DialogButton
                            text={buttonText}
                            onPress={onPress}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent>
                    {<View>
                        <Text>{results.title}</Text>
                            <FlatList
                                data={results.image}
                                keyExtractor={(photo) => photo}
                                renderItem={({ item }) => {
                                    return (
                                        <Image style={styles.imageStyle} source={{ uri: item }} />
                                    );
                                }}
                            />
                    </View>}
                </DialogContent>
            </Dialog>
        </View>
    )


}


export default DialogBox;