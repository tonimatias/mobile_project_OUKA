import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Modal, Button, Pressable } from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';
import { Details2 } from './Details2';
import { object } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

export default Architecture = ({ mode }) => {
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
        const architectureObjects = json.filter((object) => {
          const Architectures = object.Categories.find((category) => category.title === 'Arkkitehtuuri');
          return !!Architectures;
        });
        setData(architectureObjects);
        setTotalPages(Math.ceil(architectureObjects.length / itemsPerPage));
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
          const architectureObjects = json.filter((item) => {
            const Architectures = item.Categories.find((category) => category.title === 'Arkkitehtuuri');
            return !!Architectures;
          });
          setData([...data, ...architectureObjects]);
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
          const Architectures = item.Categories.find(
            (category) => category.title === 'Arkkitehtuuri'
          );
          if (!Architectures) {
            return null;
          }

          const PlaceholderImage = () => (
            <View style={styles.imagePlaceholder}>
              <Image style={styles.image}source={require('../pictures/placeholder.png')}></Image>
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
                item.Media.map((media) => (
                <Image key={media.id} source={{ uri: media.path }} style={styles.image} />
                ))
            ) : (
                <PlaceholderImage />
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
                <SafeAreaView style={[styles.bg, {backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor, color: mode ? styles.darkColor : styles.lightColor}]}>
                <Pressable style={{...styles.returnButton, backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}} onPress={toggleModal}>
                <Ionicons style={styles.arrowIcon} size={35} color='#9600AE' name="arrow-back-outline"/>
                </Pressable>
                {selectedObject && (
                  <Details2 object={selectedObject} />
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