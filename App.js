import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from './style/styles'
import Header from './components/Header'
import Statue from './components/Statue';
import Fireplace from './components/Fireplace';


export default function App() {
 


  return (
    <SafeAreaView>
      <Header />
    <ScrollView >
      <Statue/>
      <Fireplace/>
    </ScrollView>
    </SafeAreaView>
  );
}