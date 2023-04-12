import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import styles from '../style/styles';
import Oulunvaakuna from '../pictures/Oulunvaakuna.png';


export default AboutUs = () =>  {
  return (
    <ScrollView style={styles.bg}>
        <View >
        <Image source={Oulunvaakuna} style={styles.OuluSeal} resizeMode='contain'/>
        </View>
      <Text style={styles.title}>Terve</Text>
      <Text style={styles.content}>Teimme OuluAwaits sovelluksen Oulun historiasta kiinnostuneille ihmisille. Olitpa sitten ensikertalainen tai sitten kaupungin oma asukki, Oulu tarjoaa monia kiinnostavia nähtävyyksiä ja historiallisia kohteita joista jokainen voi nauttia.  </Text>
      
    </ScrollView>
   
  
  );
}