import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler, Button, Touchable } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

//tää pitää lisätä joka kategoriaan
//<Button title='lisätieto' onPress={() => navigation.navigate('Details', {data: object})}/>

export default Details = ({route, navigation}) =>  {
  const {data} = route.params;

  return (
    <ScrollView>
      <Button style={styles.Button} title='Takaisin' onPress={() => navigation.navigate('Kategoriat')}/>
      <Text style={styles.title}>{data.title}</Text>
      {data.Media.map((media) => (
        <Image
          key={media.id}
          source={{ uri: media.path }}
          style={styles.image} 
        />
      ))}
      <Text style={styles.title1}>{data.content}</Text>
      <Text>kartta linkki tähän?{data.geo.coordinates}</Text>

      
    </ScrollView>
  );
}
