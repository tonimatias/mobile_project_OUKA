import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler, Button, Touchable, Pressable } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default function Details({ route, navigation, mode }) {
  const { data } = route.params;
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() =>{
    console.log("isDarkmode: " + mode);
  },[mode]);

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
  .then((response) => response.json())
  .then((data) => {
    const location = data.find((object) => object.id === route.params.data.id);
    if (location && location.geo && location.geo.coordinates) {
      setCoordinates(location.geo.coordinates);
    } else {
      console.error('Location not found or missing coordinates');
    }
  })
  .catch((error) => console.error(error));

  }, [route.params.data.id]);

  return (
    <ScrollView style={{backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}}>
      <Pressable style={styles.returnButton} onPress={() => navigation.navigate('Kategoriat')}>
      <Ionicons style={styles.arrowIcon} size={30} color='#9600AE' name="arrow-back-outline"/>
      </Pressable>
      {data.Media.map((media) => (
        <Image
          key={media.id}
          source={{ uri: media.path }}
          style={styles.image}
          resizeMode='contain'
        />
      ))}
      <Text style={styles.title}>{data.title.toUpperCase()}</Text>
      <Text style={styles.content}>{data.content}</Text>
      {coordinates ?
        <MapView
          style={styles.map}
          region={{
            latitude: coordinates[0],
            longitude: coordinates[1],
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {coordinates && (
        <Marker coordinate={{ latitude: coordinates[0], longitude: coordinates[1] }} />
)}

        </MapView>
        :
        <Text>No coordinates found</Text>
      }
    </ScrollView>
  );
}
