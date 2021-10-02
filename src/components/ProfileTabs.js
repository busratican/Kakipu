import React, { useState } from 'react';
import { Tab, TabView, Text, Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const Tabs = ({ componentsLib, componentsPost, componentsMeeting }) => {

  const [index, setIndex] = useState(0);

  return (
      <View style={styles.container}>
        <Tab value={index} onChange={setIndex}>
          <Tab.Item
            title={<Icon name="library-shelves" type="material-community" />}
          />
          <Tab.Item title={<Icon name="list-ul" type="font-awesome" />} />
          <Tab.Item title={<Icon name="clockcircleo" type="antdesign" />} />
        </Tab>

        <TabView value={index} onChange={setIndex}>
          <TabView.Item>
            { index == 0 && componentsLib}
          </TabView.Item>
        </TabView>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    marginTop: 20, 
    marginBottom: 5 
  }
})
export default Tabs;
