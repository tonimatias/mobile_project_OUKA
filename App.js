import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import styles from './style/styles'

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView>
    <ScrollView >
      {data.slice(0, 10).map((object) => (
        
        <View key={object.id} >
          <Text style={styles.title} >{object.title}</Text>
          <Text >{object.content}</Text>
          <Text > Koordinaatit: {object.geo.coordinates}</Text>
          <View key={object.Categories.id}>
          <Text >{object.Categories.title}</Text>

          {/* <Image source={{ uri: object.Categories.path }} style={styles.image} /> */}
        </View>

        {object.Categories.map((category) => (
           <Text key={category.id}>{category.title}</Text>
          ))}

        {object.Media.map((media) => (
          <Image key={media.id} source={{ uri: media.path }} style={styles.image} />
        ))}
        
        </View>

      ))}
    </ScrollView>
    </SafeAreaView>
  );
}