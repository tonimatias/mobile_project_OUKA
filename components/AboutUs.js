import React, { useState, useEffect } from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../style/styles';
import Oulunvaakuna from '../pictures/Oulunvaakuna.png';


export default AboutUs = () =>  {
  return (
    <View>
        <Image source={Oulunvaakuna} style={styles.OuluSeal} />
      <Text style={styles.frontpage_title}>Terve</Text>
      <Text style={styles.frontpage_txt}>Teimme OuluAwaits sovelluksen Oulun historiasta kiinnostuneille ihmisille. Olitpa sitten ensikertalainen tai sitten kaupungin oma asukki, Oulu tarjoaa monia kiinnostavia nähtävyyksiä ja historiallisia kohteita joista jokainen voi nauttia.  </Text>
      <Text style={styles.frontpage_txt}></Text>
    </View>
   
  
  );
}