import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler } from 'react-native';
import styles from '../style/styles';
import Header from './Header';




export default Details = ({route}) =>  {

const {data} = route.params;

          return (
            <ScrollView>
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