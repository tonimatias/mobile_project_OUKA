import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import Statue from '../components/Statue';





export default Frontpage = () =>  {

  return (
    <ScrollView>
           <Image
        style={styles.image}
        source={require('../pictures/Oulu_frontpage.jpg')}
        resizeMode='contain'
      />
    </ScrollView>
  );
}