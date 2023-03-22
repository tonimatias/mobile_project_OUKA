import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import Statue from '../components/Statue';
import Fireplace from '../components/Fireplace';




export default Frontpage = () =>  {

  return (
    <ScrollView>
      <Statue/>
      <Fireplace/>
    </ScrollView>
  );
}