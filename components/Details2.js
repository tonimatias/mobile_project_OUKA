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

    return (
        <ScrollView>
            {object.Media.map((media) => (
                <Image
                    key={media.id}
                    source={{ uri: media.path }}
                    style={styles.image}
                    resizeMode='contain'
                />
            ))}
            <Text style={styles.title}>{object.title.toUpperCase()}</Text>
            <Text style={styles.content}>{object.content}</Text>

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
