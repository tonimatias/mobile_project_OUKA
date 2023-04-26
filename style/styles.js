import { StyleSheet } from 'react-native';




export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      padding: 5,
      flex: 1,
      backgroundColor: '#f7f7f7',
      marginBottom: 20,
    },

    searchContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      flex: 1,
      padding: 19,
    
  
    },
 
    frontpage_container: {
      flex:1,

    },
    container1: {
      paddingTop:'70%',
      height:'100%',
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
      color:'white',
      
      
    
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
    titleDetails: {
      flex: 1,
      fontSize: 26,
      textAlign: 'left',
      marginTop: 20,
      marginBottom:10,
      marginLeft:5,
      marginRight:5,
      fontFamily: 'ManropeSemiBold',
      lineHeight:35,
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
    width: '80%',
    height: 280,
    alignSelf: 'center',
    margin: 10,
    resizeMode: 'stretch',
    aspectRatio: 1.10,
   
    padding: 15

    },
    imageDetails: {
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
      width: '100%',
      height: 250,
     
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
      marginBottom: 15
      
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
      backgroundColor:'#5f5f5f',
      
    },
    backgroundDark: {
      backgroundColor: '#5f5f5f',
    },
    backgroundLight: {
      backgroundColor: '#ffffff' 
    },
    darkColor: {
      color: '#e6e6e6'
    },
    lightColor: {
      color: '#0b0b0b'
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
    contentDetails: {
      textAlign: 'left',
      fontFamily: 'ManropeRegular',
      fontSize:16,
      marginBottom:10,
      marginLeft:5,
      marginRight:5,
    },

    bgDark: {
      borderBottomColor: '#9d9c9c',
        borderBottomWidth: 1,
        padding: 15,
        margin: 5,

    },
    bgLight: {
      borderBottomColor: '#d1d0d0',
      borderBottomWidth: 1,
      padding: 15,
      margin: 5,
  },
  buttonContainer: {
    marginBottom:10,
    marginLeft:5,
    marginRight:5,
  
  },
  buttonMapsDark: {
    fontFamily: 'ManropeRegular',
    fontSize:20,
    color:'#b248d2',
    marginLeft:40,
    marginTop:-26,
    
   
  },
  iconDetails: {
    
  }
  });