import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import useResults from '../hooks/useResults';
import DialogBox from './DialogBox';
import BarcodeMask from 'react-native-barcode-mask';
import { Icon } from 'react-native-elements';

const Scanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [searchApi, results, error] = useResults();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    setScanned(false);
  }, []);

  console.log("Scanned " + scanned);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    searchApi(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner onBarCodeScanned={handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}>
        <BarcodeMask edgeColor="#62B1F6" />
      </BarCodeScanner>
      {scanned && Object.keys(results).length > 0 ? <DialogBox dialogTitle="Kitap" results={results} /> : <></>}
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,

    height: 1,
    width: '80%',
  },
});



export default Scanner;
