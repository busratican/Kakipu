import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import BookDetails from '../components/BookDetails';
import { windowHeight, windowWidth } from './Dimensions';
import { Icon } from 'react-native-elements';

const DialogBox = ({ dialogTitle, results }) => {
    const [dialogvisible, setDialogVisible] = useState(true);

    console.log("DialogVisible: " + dialogvisible);

    useEffect(() => {
        setDialogVisible(true)
    });
    
    return (
        <View style={styles.containerStyle}>
            <Dialog
                containerStyle={styles.dbContainer}
                onTouchOutside={() => setDialogVisible(false)}
                visible={dialogvisible}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogTitle={<DialogTitle title={dialogTitle} />}
            >
                <Icon name='cross' type='entypo' size={30} style={{ alignItems: 'flex-end', marginRight: 25 }} onPress={() => setDialogVisible(false)}/>
                {Object.keys(results).length > 0 ? <DialogContent style={styles.contentStyle}>
                    <BookDetails results={results} />
                </DialogContent> : <></>
                }
            </Dialog>
        </View>
    )


}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
    },
    dbContainer: {
        flex: 1, zIndex: 10, elevation: 10
    },
    contentStyle: {
        flex: 1,
        alignItems: 'center',
        height: windowHeight - 20,
        width: windowWidth - 20,
        marginHorizontal: 25
    }
})


export default DialogBox;