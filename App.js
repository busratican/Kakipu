import React, { useEffect } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
import { Icon } from 'react-native-elements';
import MeetingScreen from './src/screens/MeetingScreen';
import BarCodeScanScreen from './src/components/BarcodeScanner';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}
    >
      <Stack.Screen name="ResolveAuthScreen" component={ResolveAuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FirstOpenScreen" component={FirstOpenScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: null,
          headerBackTitleVisible: null,
        }} />
      <Stack.Screen
        name="RegisterScreen" component={RegisterScreen}
        options={{
          headerShown: true,
          headerTitle: null,
          headerBackTitleVisible: false
        }} />
    </Stack.Navigator>
  )
}

function CreateNewFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateNewScreen" component={CreateNewScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          gestureEnabled: true
        }}
      />
      <Stack.Screen name="BarCodeScanScreen" component={BarCodeScanScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false
        }} />
    </Stack.Navigator>);
}

function HomeTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarLabel: 'Anasayfa',
          tabBarIcon: ({ color, size }) => (
            <Icon
              size={30}
              name='home'
              type='feather' />
          ),
        }}
      />
      <Tab.Screen name="DiscoverScreen" component={DiscoverScreen}
        options={{
          tabBarLabel: 'Keşfet',
          tabBarIcon: ({ color, size }) => (
            <Icon
              size={30}
              name='compass'
              type='feather' />
          ),
        }}
      />
      <Tab.Screen name="CreateNewFlow" component={CreateNewFlow}
        options={({ route }) => ({
          tabBarLabel: 'Yeni',
          tabBarVisible: false,
          headerBackTitleVisible: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              size={30}
              name='pluscircleo'
              type='antdesign' />
          ),
        })}
      />
      <Tab.Screen name='MeetingScreen' component={MeetingScreen}
        options={{
          tabBarLabel: 'Toplantı',
          tabBarIcon: ({ color, size }) => (
            <Icon size={30} name="clockcircleo" type="antdesign" />
          ),
        }}
      />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Icon
              size={30}
              name='user'
              type='antdesign' />
          ),
        }}
      />

    </Tab.Navigator>
  )
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
          }}>
          <Stack.Screen name="Home" component={HomeTabs} options={{
            headerShown: true,
            headerTitle: null,
            headerBackTitleVisible: null,
          }} />
          <Stack.Screen name="Stack" component={StackScreen} options={{
            headerShown: true,
            headerTitle: null,
            headerBackTitleVisible: null,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App;