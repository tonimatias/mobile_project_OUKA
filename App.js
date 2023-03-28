import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Details from './components/Details';
import Header from './components/Header'
import Statue from './components/Statue';
import Histories from './components/History';
import Frontpage from './components/Frontpage';
import Architecture from './components/Architecture';
import Search from './components/Search';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Frontpage} options={{display: "none"}}/>
        <Stack.Screen name="Details" component={Details} />
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
        }} defaultStatus={'open'}>
       <Drawer.Screen name="Arkkitehtuuri"  component={Architecture} />
        <Drawer.Screen name="Patsaat" component={Statue} />
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