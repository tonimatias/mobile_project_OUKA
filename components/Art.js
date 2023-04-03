import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import styles from '../style/styles';
import Header from './Header';

export default Art = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // new state for total pages
  const itemsPerPage = 7;

  const scrollViewRef = useRef();

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setTotalPages(Math.ceil(json.length / itemsPerPage)); // calculate total pages
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView ref={scrollViewRef}>
      {data.length > 0 &&
        data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((object) => {
          const Arts = object.Categories.find((category) => category.title === 'Taideteos');
          if (!Arts) {
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
        <Button
          title="Edellinen sivu"
          disabled={currentPage === 1}
          onPress={() => {
            setCurrentPage(currentPage - 1);
            scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
          }}
        />
        <Text>
          {currentPage} / 6 {/* display current page and total pages */}
        </Text>
        <Button
          title="Seuraava sivu"
          disabled={currentPage === 6} 
          onPress={() => {
            setCurrentPage(currentPage + 1);
            scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
          }}
        />
      </View>
    </ScrollView>
  );
}
