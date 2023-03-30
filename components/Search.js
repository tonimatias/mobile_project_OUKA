import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, TextInput, Image, Pressable } from 'react-native';
import styles from '../style/styles';
import Park from './Park';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Architecture from './Architecture';

const Search = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://opendata.zoneatlas.com/oulu/objects.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Pressable
        onPress={() => getItem(item)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#E5E5E5' : 'white'
          }
        ]}
      >
        <Text style={styles.itemStyle_search}>
          {item.title.toUpperCase()}
          {'\n'}
        </Text>
        {item.Media.map((media) => (
          <Image
            key={media.id}
            source={{ uri: media.path }}
            style={{
              height: 500,
              width: 400,
              margin: 5,
              padding: 5
            }}
          />
        ))}
      </Pressable>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  
  
    const getItem = (item) => {
      // Navigate to the category of the item
      navigation.navigate('Taideteokset', item.Category)
    }
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputStyle_search}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};



export default Search;
