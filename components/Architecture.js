import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';

export default Architecture = ({ mode }) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 7;

  const navigation = useNavigation();

  const scrollViewRef = useRef();

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
          const architectureObjects = json.filter((object) => {
            const Architectures = object.Categories.find((category) => category.title === 'Arkkitehtuuri');
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
  
          return (
            <View
              key={item.id}
              style={[
                styles.bg,
                {
                  backgroundColor: mode
                    ? styles.contentBackgroundDark.backgroundColor
                    : styles.contentBackgroundLight.backgroundColor,
                },
              ]}
            >
              <Text style={styles.category_title}>
                {item.title.toUpperCase()}
              </Text>
              {item.Media.map((media) => (
                <Image
                  key={media.id} 
                  source={{ uri: media.path }}
                  style={styles.image}
                />
              ))}
              <View key={item.Categories.id}></View>
              <TouchableOpacity
                style={styles.Button}
                title="lisätietoa"
                onPress={() =>
                  navigation.navigate('Lisätiedot', { data: item })
                }
              >
                <Text style={styles.buttonText}>Lisätietoja</Text>
              </TouchableOpacity>
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