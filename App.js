import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header'
import Statue from './components/Statue';
import Fireplace from './components/Fireplace';
import Frontpage from './components/Frontpage';


const Tab = createBottomTabNavigator();

export default function App() {
 


  return (
    <SafeAreaView>
    <NavigationContainer>
      <Header />
    <ScrollView >
      <Frontpage />

    <Tab.Navigator>
          <Tab.Screen name='Frontpage' component={Frontpage}/>
          <Tab.Screen name='Search' component={App}/>
          <Tab.Screen name='Categories' component={App} />
    </Tab.Navigator>
    </ScrollView>
    </NavigationContainer>
    </SafeAreaView>
  );
}