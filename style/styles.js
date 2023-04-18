import { StyleSheet } from 'react-native';




export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: 5,
      paddingHorizontal: 5,
      padding: 5,
      flex: 1,
      backgroundColor: '#f7f7f7'

    },

    frontpage_container: {
      flex:1,
 

    },
    container1: {
      paddingTop:'70%',
      height:'100vh',
      backgroundColor:'#00000040',

    },
    imagefrontpage: {
      flex:1,
      
  },
    frontpageimage: {
      width: '95%',
      height: 300,
      overflow: "hidden",
      alignSelf: 'center',
         
      
    },
    frontpage_title: {
      fontSize: 40,
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      textAlign: 'left',
      fontFamily: 'ManropeBold',
      color:'white'
      
    
    },

    frontpage_txt: {
      fontSize: 16,
      marginLeft: 10,
      marginRight: 10,
      marginTop:5,
      textAlign: 'left',
      fontFamily: 'ManropeRegular',
      color:'white'

    },

    header: {
      marginTop: 30,
      marginBottom: 0,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      height: '10%',
      fontFamily: 'ManropeRegular',
      alignContent: 'center'
    
    },    
    headerlogo: {
      flex: 1,
      height:30,
      //margin:'auto'
      alignSelf: 'center',
    },
    themeButton: {
      marginTop: 30,
      position: 'absolute',
      paddingRight:15,
      right:0,
      zIndex: 1,
      //alignSelf: 'center'
    },
    arrowIcon: {
      padding: 10
    },
    title: {
      color: 'black',
      flex: 1,
      fontSize: 23,
      textAlign: 'center',
      margin: 10,
      fontFamily: 'ManropeRegular',
    },
 
    category_title: {
      padding: 10,
      fontFamily: 'ManropeRegular',
      alignSelf: 'center',
      fontSize: 18
    },

    page_number: {
      padding: 20,
      margin: 5,
      marginTop: 28,
      fontFamily: 'ManropeRegular',
      alignSelf: 'center',
      fontSize: 15,
    },
    textInputStyle_search: {
      margin: 20,
      height: 60,
      backgroundColor: '#f7f7f7',
      fontFamily: 'ManropeRegular',
    },
    searchpage_text: {
      padding: 20,
      margin: 5,
      fontFamily: 'ManropeRegular',
      fontSize: 15,
      alignSelf: 'center',
    },
    image: {
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
      width: '80%',
      height: 200,
      
    },
    OuluSeal: {
      marginTop: 10,
      width: undefined,
      height: 350,
      marginBottom: 10,
      aspectRatio: 1,
      alignSelf: 'center',
    },
    Button: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#b248d2',
      padding: 5,
      margin: 10,
      width: 150,
      height: 40,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'ManropeRegular'
    },

    category_button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#b248d2',
      padding: 8,
      margin: 20,
      marginTop: 50,
      width: 110,
      height: 35,
      borderRadius: 5
    },
    
    category_buttonText: {
      color: 'white',
      fontSize: 15,
      fontFamily: 'ManropeRegular'
    },
    headerDark: {
      backgroundColor:'#272727',
    },
    headerLight: {
      backgroundColor:'#ffffff'
    },
    drawerDark:{
      backgroundColor:'#494848'
    },
    contentBackgroundLight:{
      backgroundColor:'#ffffff'

    },
    contentBackgroundDark: {
      backgroundColor:'#5f5f5f'
    },
    
    map: {
      height: 300,
      margin: 10,
    },

    returnButton: {
      backgroundColor: '#fff',
    },

    content: {
      textAlign: 'center',
      fontFamily: 'ManropeRegular',
    },

    bg: {
      backgroundColor: '#fff',
      borderBottomColor: '#d1d0d0',
        borderBottomWidth: 1,
        //padding: 15,
        //margin: 5,
        backgroundColor: '#ffffff'
    }
  });