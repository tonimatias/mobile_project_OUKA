import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../style/styles';
import Header from './Header';




export default Park = () =>  {
 
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://opendata.zoneatlas.com/oulu/objects.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }, []);

    return (
      <ScrollView>
        {data.map((object) => {
          // Check if the object has the category "Taideteokset"
          const Statues = object.Categories.find(
            (category) => category.title === "Puisto"
          );
          if (!Statues) {
            // If the object does not have the "Taideteokset" category, skip it
            return null;
          }
          return (
            <View key={object.id}>
              <Text style={styles.title}>{object.title}</Text>
              <Text>{object.content}</Text>
              <Text>Koordinaatit: {object.geo.coordinates}</Text>
              <View key={object.Categories.id}>
                <Text>{object.Categories.title}</Text>
               
              </View>
              {object.Categories.map((category) => (
                <Text key={category.id}>{category.title}</Text>
              ))}
              {object.Media.map((media) => (
                <Image
                  key={media.id}
                  source={{ uri: media.path }}
                  style={styles.image}
                />
              ))}
            </View>
          );
        })}
      </ScrollView>
    );
  }