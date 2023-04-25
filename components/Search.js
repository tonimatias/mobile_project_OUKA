import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../style/styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';



export default function Search({mode}) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


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

  useEffect(() =>{
    //console.log("isDarkmode: " + mode);
  },[mode]);

  const searchFilterFunction = (text) => {

 
    // Check if searched text is not blank
    if (text) {

      setIsSearching(true);
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const Architectures = item.Categories.some(
          (category) => ["Arkkitehtuuri", "Patsas", "Puisto", "Taideteos", "Historialliset kohteet", "Tulentekopaikka"].includes(category.title));

          if (!Architectures) {
            return null;
          } 
          
        const itemData = item.title
          ? item.title.toUpperCase(): ''.toUpperCase();
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
      setIsSearching(false);
    }
  };

  const ItemView = ({ item }) => {
    return (
     
      <View style={[styles.bg, {backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor}]}>
    <View key={item.id} >
    <Text style={{...styles.category_title, color: mode ? '#e6e6e6' : '#0b0b0b'}}>
        {item.title.toUpperCase()}
        </Text>
      {item.Media.length > 0 ? (
        item.Media.map((media) => (
          <Image key={media.id} source={{ uri: media.path }} style={styles.image} />
        ))
      ) : (
    <Image
      source={require('../pictures/placeholder.png')} 
      style={styles.image}
    />
  )}
  </View>
    
     <TouchableOpacity  style={styles.Button} title='lisätietoa' onPress={() => navigation.navigate('Lisätiedot', {data: item})}>
          <Text style={styles.buttonText}>Lisätietoja</Text>
      </TouchableOpacity>
    </View>
 
  
    );
  };
  return (
    <SafeAreaView style= {{ backgroundColor: mode ? styles.contentBackgroundDark.backgroundColor : styles.contentBackgroundLight.backgroundColor, flex:1}}>
      <View >
        <View >
        <Searchbar
          style={{...styles.textInputStyle_search, backgroundColor: mode ? '#a1a1a1': '#f7f7f7', color: mode ? '#f7f7f7' : '#818181'}}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder='Hae tästä'
        
        />
         {search ? null : (
        <Text style={{...styles.searchpage_text, color: mode ? '#e6e6e6' : '#0b0b0b'}}>Tervetuloa etsimään Oulun kaupungin kulttuurillisia kohteita. Voit etsiä kohteita niiden nimien tai kirjainten perusteella. Syötä hakusana ylhäällä olevaan hakukenttään
         ja voit löytää uusia kiinnostavia kohteita Oulun kaupungista. Jos et ole varma mitä etsit, voit myös selata kaikkia kohteita menemällä kategoriat sivulle.
          Kun löydät mielenkiintoisen kohteen, klikkaa "Lisätietoja" -painiketta saadaksesi lisää tietoa kohteesta, kuten sen historiasta ja sijainnista. Me toivomme, että löydät etsimäsi ja että saat nauttia kaupungin kulttuurin kauneudesta ja monimuotoisuudesta!</Text>
        )}
        <FlatList style={{
            backgroundColor: mode ? '#494848' : '#f7f7f7' }}
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            if (search !== '') {
              return <ItemView item={item} />;
            } else {
              return null;
            }
          }}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};




