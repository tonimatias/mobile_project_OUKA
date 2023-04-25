import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Button } from 'react-native';
import styles from '../style/styles';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { Details2 } from './Details2';


export default Statue = ({ mode, route, navigation}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // new state for total pages
  const itemsPerPage = 7;

  //const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);

  const scrollViewRef = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((json) => {
        const statueObjects = json.filter((object) => {
          const Statues = object.Categories.find((category) => category.title === 'Patsas');
          return !!Statues;
        });
        setData(statueObjects);
        setTotalPages(Math.ceil(statueObjects.length / itemsPerPage)); // calculate total pages based on filtered objects
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() =>{
    //console.log("isDarkmode: " + mode);
  },[mode]);

  return (
    <ScrollView style={{backgroundColor: mode ? styles.backgroundDark.backgroundColor : styles.backgroundLight.backgroundColor}} ref={scrollViewRef}>
      {data.length > 0 &&
        data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((object) => {
          Statues = object.Categories.find((category) => category.title ==='Patsas');
          if (!Statues) {
            return null;
          }

          const PlaceholderImage = () => (
            <View style={styles.imagePlaceholder}>
              <Image style={styles.image}source={require('../pictures/placeholder.png')}></Image>
            </View>
          );

          return (
            <View key={object.id} style={[{
              borderBottomColor: mode ? styles.bgDark.borderBottomColor   : styles.bgLight.borderBottomColor,
              borderBottomWidth: mode ? styles.bgDark.borderBottomWidth : styles.bgLight.borderBottomWidth,
              backgroundColor: mode? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor,
              padding: mode ? styles.bgDark.padding : styles.bgLight.padding }]}>
               <Text style={{...styles.category_title, color: mode ? styles.darkColor.color : styles.lightColor.color}}>{object.title.toUpperCase()}</Text>
            {object.Media.length > 0 ? (
                object.Media.map((media) => (
                <Image key={media.id} source={{ uri: media.path }} style={styles.image} />
                ))
            ) : (
                <PlaceholderImage />
            )}
              <View key={object.Categories.id}></View>
              <TouchableOpacity
                style={styles.Button}
                title='lisätietoa'
                onPress={() => {
                setSelectedObject(object);
                toggleModal();
                }}>
                <Text style={styles.buttonText}>Lisätietoja</Text>
              </TouchableOpacity>

              <Modal visible={showModal} animationType="none">
                <ScrollView style={[styles.bg, {backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}]}>
                <Button title="takaisin" onPress={toggleModal} />
                {selectedObject && (
                  <Details2 object={selectedObject} />
                )}
                </ScrollView>
              </Modal>

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