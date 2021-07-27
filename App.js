import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstOpenScreen from './src/screens/FirstOpenScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import CreateNewScreen from './src/screens/CreateNewScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainFlow() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
        <Tab.Screen name="CreateNewScreen" component={CreateNewScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
  );
}


function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        >
          <Stack.Screen
            name="ResolveAuthScreen"
            component={ResolveAuthScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="FirstOpenScreen"
            component={FirstOpenScreen}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: true,
              headerTitle: null,
              headerBackTitleVisible: null,
            }} />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: true,
              headerTitle: null,
              headerBackTitleVisible: false
            }} />
          <Stack.Screen
            name="MainFlow" 
            component={MainFlow} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>

  )
}

export default App;