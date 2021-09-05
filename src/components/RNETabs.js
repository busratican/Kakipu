import React, { useState } from 'react';
import { Tab, TabView } from 'react-native-elements';
import { View } from 'react-native';

const RNETabs = ({ components, barcodevisible }) => {
    const [index, setIndex] = useState(0);
    return (
        <>
           <View style={{ flex: 1, marginTop: 100, justifyContent: 'flex-start', alignSelf: 'center', flexDirection: 'column' }}>
                <Tab value={index} onChange={setIndex} indicatorStyle={{ backgroundColor: 'transparent'}} >
                    <Tab.Item 
                    title="Yeni Kitap" 
                    titleStyle={{backgroundColor: 'transparent', color: 'black'}}
                    />
                    <Tab.Item 
                    title="Yeni Toplantı" 
                    titleStyle={{backgroundColor: 'transparent', color: 'black'}}/>
                </Tab>

                <TabView value={index} onChange={setIndex}>
                    <TabView.Item style={{ justifyContent: 'flex-start', marginTop: 100, flex: 1, marginHorizontal: 10 }}>
                        {components}
                    </TabView.Item>

                </TabView>
            </View> 

        </>

    );
};


export default RNETabs;