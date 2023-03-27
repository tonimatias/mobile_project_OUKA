import React, { useState, useEffect } from 'react';
import { Text, ScrollView, Image, BackHandler } from 'react-native';
import styles from '../style/styles';
import Header from './Header';




export default Details = ({route,navigation}) =>  {
 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [geo, setGeo] = useState([]);
  const [media, setMedia] = useState([]);
    

    useEffect(() => {

        if (route.params?.data) {
            setTitle(route.params.data.title)
            setContent(route.params.data.content)
            setGeo(route.params.data.geo)
            setMedia(route.params.data.media)
        }

    BackHandler.addEventListener('hardwareBackPress',close);
    return () => {
    BackHandler.removeEventListener('hardwareBackPress',close);

    }
    }, [route.params?.data]);

    function close() {
      navigation.goBack(null);
      return true;
    }

          return (
            <ScrollView>
              <Text style={styles.title}>{title}</Text>
              <Image
                  style={styles.image}
                />
              <Text style={styles.title}>{content}</Text>
              <Text>kartta linkki tähän?{geo.coordinates}</Text>
            </ScrollView>
          );
  }