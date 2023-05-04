import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler, Button, Touchable, Pressable, View, Linking, TouchableOpacity } from 'react-native';

import styles from '../style/styles';
import Header from './Header';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export default function Details({ route, navigation, isDarkmode }) {
  const { data } = route.params;
  const [coordinates, setCoordinates] = useState(null);
  const [isDarkmodeState, setIsDarkmodeState] = useState(isDarkmode);


  useEffect(() => {
    setIsDarkmodeState(isDarkmode);
  }, [isDarkmode]);

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

  const cleanContent = { ...data, content: data.content.replace(/#/g, '').trim() };

  const PlaceholderImage = () => (
    <View style={styles.imagePlaceholder}>
      <Image style={styles.image} source={require('../pictures/placeholder.png')}></Image>
    </View>
  );

  return (
    <ScrollView style={{ backgroundColor: isDarkmodeState ? styles.backgroundDark.backgroundColor : styles.backgroundLight.backgroundColor }}>
      <Pressable style={{ ...styles.returnButton, backgroundColor: isDarkmodeState ? styles.backgroundDark.backgroundColor : styles.backgroundLight.backgroundColor }} onPress={() => navigation.navigate('Kategoriat')}>
        <Ionicons style={styles.arrowIcon} size={30} color='#9600AE' name="arrow-back-outline" />
      </Pressable>

      {data.Media.length > 0 ? (
        data.Media.map((media) => (
          <Image key={media.id} source={{ uri: media.path }} style={styles.imageDetails} />
        ))
      ) : (
        <PlaceholderImage />
      )}

      <Text style={{ ...styles.titleDetails, color: isDarkmodeState ? styles.darkColor.color : styles.lightColor.color }}>{data.title.toUpperCase()}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title="Avaa Mapsissa"
          onPress={() => {
            if (coordinates) {
              const url = `https://www.google.com/maps?q=${coordinates[0]},${coordinates[1]}`;
              Linking.openURL(url);
            } else {
              console.error('Coordinates not found');
            }
          }}>
          <Ionicons style={styles.iconDetails} name='map-outline' size={30} color='#9600AE' /><Text style={styles.buttonMapsDark} >Avaa Mapsissa</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ ...styles.contentDetails, color: isDarkmodeState ? styles.darkColor.color : styles.lightColor.color }}>{cleanContent.content}</Text>

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
