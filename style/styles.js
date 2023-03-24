import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    image: {
      width: 400,
      height: 300,
      alignSelf: 'center',
      margin: 15,
      
      
    },
    title1: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 5,
    },
    header: {
      marginTop: 30,
      marginBottom: 15,
      backgroundColor: '#78C2D9',
      flexDirection: 'row',
      height: '10%',
    },    
    headertitle: {
      flex: 1,
      margin: 10,
      paddingTop:'5%',
      
      height:'60%',
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