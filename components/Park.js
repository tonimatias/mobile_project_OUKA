import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../style/styles';
import Header from './Header';

export default Park = ({navigation}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // new state for total pages
  const itemsPerPage = 7;



  const scrollViewRef = useRef();

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((json) => {
        const parkObjects = json.filter((object) => {
          const Parks = object.Categories.find((category) => category.title === 'Puisto');
          return !!Parks;
        });
        setData(parkObjects);
        setTotalPages(Math.ceil(parkObjects.length / itemsPerPage)); // calculate total pages based on filtered objects
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView ref={scrollViewRef}>
      {data.length > 0 &&
        data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((object) => {
          Parks = object.Categories.find((category) => category.title ==='Puisto');
          if (!Parks) {
            return null;
          }

          return (
            <View key={object.id}>
              <Text style={styles.title}>{object.title}</Text>
              <View key={object.Categories.id}></View>
              {object.Media.map((media) => (
                <Image key={media.id} source={{ uri: media.path }} style={styles.image} />
              ))}
            <TouchableOpacity  style={styles.Button} title='lisätietoa' onPress={() => navigation.navigate('Lisätiedot', {data: object})}>
              <Text style={styles.buttonText}>Lisätietoja</Text>
            </TouchableOpacity>
            </View>
          );
        })}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            title="Edellinen sivu"
            style={styles.category_button}
            disabled={currentPage === 1}
            onPress={() => {
              setCurrentPage(currentPage - 1);
              scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
            }}>
            <Text style={styles.category_buttonText}>Edellinen sivu</Text>
          </TouchableOpacity>
          <Text style={styles.title_search}>
            {currentPage} / {totalPages} {/* display current page and total pages */}
          </Text>
          <TouchableOpacity
            title="Seuraava sivu"
            style={styles.category_button}
            disabled={currentPage === totalPages} 
            onPress={() => {
              setCurrentPage(currentPage + 1);
              scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
            }}>
            <Text style={styles.category_buttonText}>Seuraava sivu</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}