import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstOpenScreen from './src/screens/FirstOpenScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import HomeScreen from './src/screens/HomeScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';


const StackNavigator = createStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }}
        >
          <StackNavigator.Screen
            name="ResolveAuthScreen"
            component={ResolveAuthScreen}
            options={{ headerShown: false }} />
          <StackNavigator.Screen
            name="FirstOpenScreen"
            component={FirstOpenScreen}
            options={{ headerShown: false }} />
          <StackNavigator.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: true,
              headerTitle: null,
              headerBackTitleVisible: null,
            }} />
          <StackNavigator.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: true,
              headerTitle: null,
              headerBackTitleVisible: false
            }} />
          <StackNavigator.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              headerTitle: null,
              headerBackTitleVisible: false
            }} />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </AuthProvider>

  )
}

export default App;