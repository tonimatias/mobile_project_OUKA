import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import Statue from '../components/Statue';

export default Frontpage = () =>  {

  return (
    <ScrollView>
           <Image
        style={styles.frontpageimage}
        source={require('../pictures/Oulu_frontpage.jpg')}
        resizeMode='contain'
      />
      <Text style={styles.frontpage_title}>OuluAwaits on sovellus, jonka avulla löydät mielenkiintoista arkkitehtuuria, taideteoksia, patsaita, sekä puistoja ja historiallisia paikkoja.  </Text>
      <Text style={styles.frontpage_title}>Alhaalta voit etsiä aluetta, taiteilijaa, tai paikkaa. Valikosta löytyy jokaiselle kategorialle oma sivusto.</Text>
    </ScrollView>
  );
}