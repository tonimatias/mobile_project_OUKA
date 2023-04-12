import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../style/styles';
import Header from './Header';

export default Fireplace = ({navigation}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // new state for total pages
  const itemsPerPage = 7;



  const scrollViewRef = useRef();

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((json) => {
        const fireplaceObjects = json.filter((object) => {
          const Fireplaces = object.Categories.find((category) => category.title === 'Tulentekopaikka');
          return !!Fireplaces;
        });
        setData(fireplaceObjects);
        setTotalPages(Math.ceil(fireplaceObjects.length / itemsPerPage)); // calculate total pages based on filtered objects
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView ref={scrollViewRef}>
      {data.length > 0 &&
        data.slice((currentPage - 1) * itemsPerPage + 1, currentPage * itemsPerPage).map((object) => {
          Fireplaces = object.Categories.find((category) => category.title === 'Tulentekopaikka');
          if (!Fireplaces) {
            return null;
          }

          const PlaceholderImage = () => (
            <View style={styles.imagePlaceholder}>
              <Text>No image available</Text>
            </View>
          );

         
          return (
            <View key={object.id}>
            {object.Media.length > 0 ? (
                object.Media.map((media) => (
                <Image key={media.id} source={{ uri: media.path }} style={styles.image} />
                ))
            ) : (
                <PlaceholderImage />
            )}
              
              <Text style={styles.category_title}>{object.title.toUpperCase()}</Text>
              <View key={object.Categories.id}></View>
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

          <Text style={styles.page_number}>
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