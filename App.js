import 'react-native-gesture-handler';
import React, { useState } from 'react';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header'
import Statue from './components/Statue';
import Histories from './components/History';
import Art from './components/Art';
import Park from './components/Park';
import Frontpage from './components/Frontpage';
import Architecture from './components/Architecture';
import Search from './components/Search';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUs from './components/AboutUs';
import Fireplace from './components/Fireplace';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
  
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Frontpage} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  }
  function toggleDarkMode() {
    setIsDarkmode(!isDarkmode);
  }

  function MyDrawer() {
    
    return (
      <Drawer.Navigator screenOptions={{drawerPosition:'right', 
        overlayColor:'#FFFFFFD9', 
        headerStyle:{ backgroundColor: isDarkmode ? styles.headerDark.backgroundColor : styles.headerLight.backgroundColor},
        drawerActiveTintColor: '#151515',
        headerTintColor:'#b248d2',
        drawerLabelStyle:{fontFamily:'ManropeRegular', fontSize:17, color:'#b248d2'},
        drawerStyle:{backgroundColor:isDarkmode ? styles.drawerDark.backgroundColor : styles.headerLight.backgroundColor},
        headerLeft:false,
        headerRight: () => <DrawerToggleButton tintColor='#9600AE' />
        }}
        defaultStatus='open'>
       <Drawer.Screen name="Arkkitehtuuri"  children={()=><Architecture mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}} />
        <Drawer.Screen name="Patsaat" children={()=><Statue mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}}/>
        <Drawer.Screen name="Taideteokset" children={()=><Art mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}} />
        <Drawer.Screen name="Historialliset kohteet" children={()=><Histories mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}} />
        <Drawer.Screen name="Puistot" children={()=><Park mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}}/>
        <Drawer.Screen name="Nuotiopaikat" children={()=><Fireplace mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}}/>
        <Drawer.Screen name="Tietoa Meistä" children={()=><AboutUs mode={isDarkmode}/>} options={{unmountOnBlur:true, headerTitleAlign: 'center'}}/>
      </Drawer.Navigator>
    );
  }
  
 

  const [loaded] = useFonts({
    ManropeRegular: require('./assets/fonts/Manrope-Regular.ttf'),
    ManropeBold: require('./assets/fonts/Manrope-ExtraBold.ttf'), 
    ManropeSemiBold: require('./assets/fonts/Manrope-SemiBold.ttf'),
  });

  if(!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Header isDarkmode={isDarkmode} toggleDarkMode={toggleDarkMode}/>
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "#9600AE",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          {
            "backgroundColor": isDarkmode ? styles.headerDark.backgroundColor : styles.headerLight.backgroundColor
          },
          null
        ]
      }}>
      <Tab.Screen name='Koti' component={HomeStack} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='ios-home' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Haku' children={()=><Search mode={isDarkmode}/>} options={{headerShown: false, unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='search' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Kategoriat' component={MyDrawer} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='albums-outline' size={size} color={color} />     
      )}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}