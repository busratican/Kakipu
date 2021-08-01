import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {Context as DialogContext} from '../context/DialogBoxContext';

const DialogBox = ({ dialogTitle, buttonText, onPress, results }) => {

    const {state: {dialogvisible}, stopdialog} = useContext(DialogContext);

    return (
        <View style = {styles.containerStyle}>
            <Dialog
                 containerStyle = {styles.dbContainer}
                onTouchOutside = {stopdialog}
                visible={dialogvisible}
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
                {Object.keys(results).length > 0 ?  <DialogContent style = {styles.contentStyle}>
                    {<View>
                        <Text style={{color: 'black'}}>{results.book.title}</Text>
                    </View>}
                </DialogContent> : <> </>}
               
            </Dialog>
        </View>
    )


}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    dbContainer: {
        zIndex: 10, elevation: 10 
    },
    contentStyle: {
        alignItems: 'center',
        height: 300,
        width: 300,
        marginHorizontal: 25
    }
})


export default DialogBox;