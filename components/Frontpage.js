import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import Statue from '../components/Statue';

export default Frontpage = (props) =>  {
  const { isDarkmode} = props
  return (
  
  
    <ScrollView style={{ ...styles.frontpage_container, backgroundColor: isDarkmode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor }}>
     <ImageBackground source={require('../pictures/frontpage_img_2.jpg')} resizeMode="cover" style={styles.imagefrontpage}>
       <View style={styles.container1}>
      <Text style={styles.frontpage_title}>Oulu Awaits!</Text>
      <Text style={styles.frontpage_txt}>OuluAwaits on sovellus, jonka avulla löydät mielenkiintoista arkkitehtuuria, taideteoksia, patsaita, sekä puistoja ja historiallisia paikkoja.  </Text>
      <Text style={styles.frontpage_txt}>Alhaalta voit etsiä aluetta, taiteilijaa, tai paikkaa. Valikosta löytyy jokaiselle kategorialle oma sivusto.</Text>
      </View>
      </ImageBackground> 
    </ScrollView>
   
  
  );
}