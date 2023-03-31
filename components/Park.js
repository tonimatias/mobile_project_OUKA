import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../style/styles';
import Header from './Header';


export default Park = ({navigation}) =>  {
 
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
          // Check if the object has the category "Puisto"
          const Parks = object.Categories.find(
            (category) => category.title === "Puisto"
          );
          if (!Parks) {
            // If the object does not have the "Puisto" category, skip it
            return null;
          }
          return (
            <View key={object.id}>
              <Text style={styles.title}>{object.title}</Text>
              <Text style={styles.category_title}>{object.content}</Text>
              <Text style={styles.category_title}>Koordinaatit: {object.geo.coordinates}</Text>
              <View key={object.Categories.id}>
              </View>
              {object.Media.map((media) => (
                <Image
                  key={media.id}
                  source={{ uri: media.path }}
                  style={styles.image}
                />
              ))}
              <TouchableOpacity  style={styles.Button} title='lisätietoa' onPress={() => navigation.navigate('Lisätiedot', {data: object})}>
              <Text style={styles.buttonText}>Lisätietoja</Text>
            </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  }