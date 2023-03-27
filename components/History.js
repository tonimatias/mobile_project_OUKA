import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../style/styles';
import Header from './Header';




export default Histories = () =>  {
 
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
          // Check if the object has the category "Historiallinen kohde"
          const History = object.Categories.find(
            (category) => category.title === "Historiallinen kohde"
          );
          if (!History) {
            // If the object does not have the "THistoriallinen kohde" category, skip it
            return null;
          }
          return (
            <View key={object.id}>
              <Text style={styles.title}>{object.title}</Text>
              <Text style={styles.title1}>{object.content}</Text>
              <Text style={styles.title1}>Koordinaatit: {object.geo.coordinates}</Text>
              <View key={object.Categories.id}>
              </View>
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