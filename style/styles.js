import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: 5,
      paddingHorizontal: 5,
      flex: 1

    },
    frontpageimage: {
      width: '100%',
      height: 300,
      alignSelf: 'center',
      margin: 15,
      
      
    },
    category_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
      fontFamily: 'ManropeRegular'
    },

    frontpage_title: {
      fontSize: 16,
      margin: 5,
      textAlign: 'center',
      fontFamily: 'ManropeRegular'

    },

    header: {
      marginTop: 30,
      marginBottom: 0,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      height: '10%',
      fontFamily: 'ManropeRegular'
    },    
    headerlogo: {
      flex: 1,
      height:30,
      alignSelf: 'center',
      
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      flex: 1,
      fontSize: 23,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'ManropeRegular'
    },
    title1: {
      color: 'black',
      fontWeight: 'bold',
      flex: 1,
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'ManropeRegular'
    },
    itemStyle_search: {
      padding: 10,
    },
    textInputStyle_search: {
      height: 40,
      borderWidth: 1,
      width: 300,
      alignSelf: 'center',
      paddingLeft: 20,
      margin: 5,
      borderColor:  '#9600AE',
      backgroundColor: '#FFFFFF',
    },
    image: {
      width: '100%',
      height: 300,
    },
    Button: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 8,
      elevation: 2,
      backgroundColor: '#9047da',
    },
    buttonText: {
      color: 'white',
      fontSize: 15
    }
  });