import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import Statue from '../components/Statue';

export default Frontpage = (props) =>  {
  const { isDarkmode} = props
  return (
    <ScrollView style={{ backgroundColor: isDarkmode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor }}>
           <Image
        style={styles.frontpageimage}
        source={require('../pictures/Oulu_frontpage.jpg')}
        resizeMode='contain'
      />
      <Text style={styles.frontpage_title}>Mikä ihmeen Oulu Awaits?</Text>
      <Text style={styles.frontpage_txt}>OuluAwaits on sovellus, jonka avulla löydät mielenkiintoista arkkitehtuuria, taideteoksia, patsaita, sekä puistoja ja historiallisia paikkoja.  </Text>
      <Text style={styles.frontpage_txt}>Alhaalta voit etsiä aluetta, taiteilijaa, tai paikkaa. Valikosta löytyy jokaiselle kategorialle oma sivusto.</Text>
    </ScrollView>
  );
}