import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import styles from '../style/styles';
import Oulunvaakuna from '../pictures/Oulunvaakuna.png';


export default AboutUs = ({mode}) =>  {

  useEffect(() =>{
  },[mode]);

  return (
    <ScrollView style={[{backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}]}>
       <View >
        <Image source={require('../pictures/Oulunvaakuna.png')} style={styles.OuluSeal} resizeMode='contain'/>
      </View>
      <Text style={styles.title}>Info</Text>
      <Text style={styles.content}>Teimme OuluAwaits sovelluksen Oulun historiasta kiinnostuneille ihmisille. Olitpa sitten ensimmäistä kertaa käymässä tai sitten kaupungin oma asukki, Oulu tarjoaa monia kiinnostavia nähtävyyksiä ja historiallisia kohteita joista jokainen voi nauttia. Sovellus tarjoaa sijainnit nähtävyyksille, sekä antaa sinulle niiden historian (jos tieto on saatavilla). Tämän lisäksi löydät sijainnit yleisille nuotiopaikoille jonne voit mennä vaikka makkaranpaistoon.  </Text>
      
    </ScrollView>
   
  
  );
}