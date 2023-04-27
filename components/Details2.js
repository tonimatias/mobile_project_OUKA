import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler, Button, Touchable, Pressable } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

export function Details2 ({ object }) {

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
            <Text style={styles.titleDetails}>{object.title.toUpperCase()}</Text>
            <Text style={styles.contentDetails}>{trimmedContent}</Text>

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
