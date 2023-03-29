import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerToggleButton  } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Details from './components/Details';
import Header from './components/Header'
import Statue from './components/Statue';
import Histories from './components/History';
import Art from './components/Art';
import Park from './components/Park';
import Frontpage from './components/Frontpage';
import Architecture from './components/Architecture';
import Search from './components/Search';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Frontpage} options={{headerShown: false}}/>
        <Stack.Screen name="Lisätiedot" component={Details}/>
      </Stack.Navigator>
    );
  }

  function MyDrawer() {

    return (
      <Drawer.Navigator screenOptions={{drawerPosition:'right', 
        overlayColor:'#FFFFFFD9', 
        headerStyle:{ backgroundColor:'#9600AE'},
        drawerActiveTintColor: '#151515',
        headerTintColor:'white',
        drawerLabelStyle:{fontFamily:'ManropeRegular', fontSize:17, color:'#9600AE'},
        headerLeft:false,
        headerRight: () => <DrawerToggleButton tintColor='white' />
        }}
        defaultStatus='open'>
       <Drawer.Screen name="Arkkitehtuuri"  component={Architecture}/>
        <Drawer.Screen name="Patsaat" component={Statue}/>
        <Drawer.Screen name="Taideteokset" component={Art} />
        <Drawer.Screen name="Historialliset kohteet" component={Histories} />
        <Drawer.Screen name="Puistot" component={Park} />
      </Drawer.Navigator>
    );
  }
 

  const [loaded] = useFonts({
    ManropeRegular: require('./assets/fonts/Manrope-Regular.ttf'),
  });

  if(!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Header />
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "#9600AE",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
      <Tab.Screen name='Koti' component={HomeStack} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='ios-home' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Haku' component={Search} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='search' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Kategoriat' component={MyDrawer} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='menu' size={size} color={color} />     
      )}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}