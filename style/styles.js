import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    image: {
      width: 370,
      height: 250,
      alignSelf: 'center',
      borderRadius: 25,
      
    },
    title1: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    header: {
      marginTop: 30,
      marginBottom: 15,
      backgroundColor: 'green',
      flexDirection: 'row',
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      flex: 1,
      fontSize: 23,
      textAlign: 'center',
      margin: 10,
    },
  });