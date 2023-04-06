import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler, Button, Touchable } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import MapView, { Marker } from 'react-native-maps';

export default function Details({ route, navigation }) {
  const { data } = route.params;
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((data) => {
        const location = data.find((object) => object.id === route.params.data.id);
        //console.log(location);
        if (location && location.geo && location.geo.coordinates) {
          setCoordinates(location.geo.coordinates);
        } else {
          console.error('Location not found or missing coordinates');
        }
      })
      .catch((error) => console.error(error));
  }, [route.params.data.id]);

  return (
    <ScrollView>
      <Button style={styles.Button} title='Takaisin' onPress={() => navigation.navigate('Kategoriat')}/>
      <Text style={styles.title}>{data.title}</Text>
      {data.Media.map((media) => (
        <Image
          key={media.id}
          source={{ uri: media.path }}
          style={styles.image}
        />
      ))}
      <Text style={styles.title}>{data.content}</Text>
      <Text>kartta linkki tähän?</Text>
      {coordinates ?
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates[1],
          longitude: coordinates[0],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates && (
          <Marker coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }} />
        )}
      </MapView>
      
        :
        <Text>No coordinates found</Text>
      }
    </ScrollView>
  );
}

