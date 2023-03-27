import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header'
import Statue from './components/Statue';
import Histories from './components/History';
import Frontpage from './components/Frontpage';
import Architecture from './components/Architecture';
import Search from './components/Search';


const Tab = createBottomTabNavigator();

export default function App() {
 


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
          <Tab.Screen name='Koti' component={Frontpage} options={{headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' size={size} color={color} />
        )}}/>
          <Tab.Screen name='Haku' component={Search} options={{headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
        )}}/>
          <Tab.Screen name='Kategoriat' component={Search} options={{headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='menu' size={size} color={color} />
        )}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}