import React, { useState, useEffect, useContext } from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { windowWidth } from './Dimensions';
import useResults from '../hooks/useResults';
import DialogBox from './DialogBox';
import { Context as DialogContext } from '../context/DialogBoxContext';
import { Context as BarcodeContext } from '../context/BarcodeContext';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [searchApi, results, error] = useResults();
  const { state: { dialogvisible }, startdialog } = useContext(DialogContext);
  const { state: { barcodevisible }, stopbarcode } = useContext(BarcodeContext);

  console.log(dialogvisible);
  console.log(barcodevisible);
  console.log(results);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    searchApi(data);
    startdialog();  
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
        <Icon name='cross' type='entypo' size={25} style={{marginTop: 100}} color='#fff' onPress={() => {stopbarcode()}} />  
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
    
      {Object.keys(results).length > 0 ? <DialogBox dialogTitle="Kitap" results={results} /> : <></>}

    </>
  );
}

export default Scanner;
