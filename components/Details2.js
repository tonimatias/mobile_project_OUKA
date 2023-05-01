import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler, Button, Touchable, Pressable, View, TouchableOpacity, Linking } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export function Details2 ({ object, mode, PlaceholderImage }) {

    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        setCoordinates(object.geo.coordinates);
      }, []);

      const trimmedContent = object.content.replace(/[#\*]/g, '').trim();

      

    return (
        <ScrollView>
            {object.Media.length > 0 ? (
                object.Media.map((media) => (
                <Image key={media.id} source={{ uri: media.path }} style={styles.imageDetails} />
                ))
            ) : (
                <PlaceholderImage />
            )}
            <Text style={{...styles.titleDetails, color: mode ? styles.darkColor.color : styles.lightColor.color}}>{object.title.toUpperCase()}</Text>
            <Text style={{...styles.contentDetails, color: mode ? styles.darkColor.color : styles.lightColor.color}}>{trimmedContent}</Text>
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
