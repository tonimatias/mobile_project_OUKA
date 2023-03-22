import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header'
import Statue from './components/Statue';
import Fireplace from './components/Fireplace';
import Frontpage from './components/Frontpage';
import Architecture from './components/Architecture';
import Search from './components/Search';


const Tab = createBottomTabNavigator();

export default function App() {
 


  return (
    <NavigationContainer>
      <Header />
    
    <Tab.Navigator>
          <Tab.Screen name='Koti' component={Frontpage} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' size={size} color={color} />
        )}}/>
          <Tab.Screen name='Haku' component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
        )}}/>
          <Tab.Screen name='Kategoriat' component={App} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='menu' size={size} color={color} />
        )}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}