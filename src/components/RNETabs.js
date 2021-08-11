import React, { useState, useContext } from 'react';
import { Tab, TabView, Text } from 'react-native-elements';
import { View } from 'react-native';
import { Context as BarcodeContext } from '../context/BarcodeContext';
import Scanner from '../components/BarcodeScanner';

const RNETabs = ({ components }) => {
    const [index, setIndex] = useState(0);
    const { state: { barcodevisible } } = useContext(BarcodeContext);

    return (
        <>
            {barcodevisible ?  <Scanner /> : <View style={{ flex: 1, marginTop: 100, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column' }}>
                <Tab value={index} onChange={setIndex} >
                    <Tab.Item title="Yeni Kitap" />
                    <Tab.Item title="Yeni Toplantı" />
                </Tab>

                <TabView value={index} onChange={setIndex}>
                    <TabView.Item style={{ justifyContent: 'flex-start', marginTop: 100, flex: 1, marginHorizontal: 10 }}>
                        {components}
                    </TabView.Item>

                </TabView>
            </View> }

        </>

    );
};


export default RNETabs;