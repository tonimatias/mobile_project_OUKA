import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, Button, Pressable } from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';
import { Details2 } from './Details2';
import { object } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

export default Histories = ({ mode }) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 7;

  const [showModal, setShowModal] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);

  const navigation = useNavigation();

  const scrollViewRef = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((json) => {
        const historyObjects = json.filter((object) => {
          const History = object.Categories.find((category) => category.title === 'Historiallinen kohde');
          return !!History;
        });
        setData(historyObjects);
        setTotalPages(Math.ceil(historyObjects.length / itemsPerPage));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log('isDarkmode: ' + mode);
  }, [mode]);

  const handleScroll = ({ nativeEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
      loadMoreData();
    }
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  };

  const loadMoreData = () => {
    const currentPage = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
      const start = currentPage * itemsPerPage;
      const end = start + itemsPerPage;
      fetch(`https://opendata.zoneatlas.com/oulu/objects.json?start=${start}&end=${end}`)
        .then((response) => response.json())
        .then((json) => {
          const historyObjects = json.filter((item) => {
            const History = item.Categories.find((category) => category.title === 'Historiallinen kohde');
            return !!History;
          });
          setData([...data, ...historyObjects]);
        })
        .catch((error) => console.error(error));
    }
  };
  

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ backgroundColor: mode ? styles.backgroundDark.backgroundColor : styles.backgroundLight.backgroundColor
 }}
        ref={scrollViewRef}
        data={data}
        renderItem={({ item }) => {
          const History = item.Categories.find(
            (category) => category.title === 'Historiallinen kohde'
          );
          if (!History) {
            return null;
          }

          const PlaceholderImage = () => (
            <View style={styles.imagePlaceholder}>
              <Image style={styles.image}source={require('../pictures/historiallisetkohteet_placeholder.png')}></Image>
            </View>
          );
          const PlaceholderImageDetails = () => (
            <View style={styles.imagePlaceholder}>
              <Image style={styles.imageDetails}source={require('../pictures/historiallisetkohteet_placeholder.png')}></Image>
            </View>
          );
  
          return (
            <View key={item.id} style={[{
              borderBottomColor: mode ? styles.bgDark.borderBottomColor   : styles.bgLight.borderBottomColor,
              borderBottomWidth: mode ? styles.bgDark.borderBottomWidth : styles.bgLight.borderBottomWidth,
              backgroundColor: mode? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor,
              padding: mode ? styles.bgDark.padding : styles.bgLight.padding }]}>
              <Text style={{...styles.category_title, color: mode ? styles.darkColor.color : styles.lightColor.color}}>
                {item.title.toUpperCase()}
              </Text>
              {item.Media.length > 0 ? (
                <Image key={item.Media[0].id} source={{ uri: item.Media[0].path }} style={styles.image} />
                ) : (
                  <Image style={styles.image}source={require('../pictures/historiallisetkohteet_placeholder.png')}></Image>
                )}
              <View key={item.Categories.id}></View>
              <TouchableOpacity
                style={styles.Button}
                title='lisätietoa'
                onPress={() => {
                setSelectedObject(item);
                toggleModal();
                }}>
                <Text style={styles.buttonText}>Lisätietoja</Text>
              </TouchableOpacity>

              <Modal visible={showModal} animationType="none">
                <SafeAreaView style={[styles.bg, {backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}]}>
                <Pressable style={{...styles.returnButton, backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}} onPress={toggleModal}>
                <Ionicons style={styles.arrowIcon} size={35} color='#9600AE' name="arrow-back-outline"/>
                </Pressable>
                {selectedObject && (
                  <Details2 object={selectedObject} mode={mode} PlaceholderImage={PlaceholderImageDetails}/>
                )}
                
                </SafeAreaView>
              </Modal>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        initialNumToRender={itemsPerPage}
        maxToRenderPerBatch={itemsPerPage}
        windowSize={10}
      />
    </View>
  )};  

