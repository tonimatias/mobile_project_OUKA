import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import styles from './style/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Details from './components/Details';
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
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
import AboutUs from './components/AboutUs';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
//const isDarkMode = true;


export default function App() {
  const [isDarkmode, setIsDarkmode] = useState(false)
  
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Frontpage} options={{headerShown: false}}/>
        <Stack.Screen name="Lisätiedot" component={Details} options={{headerShown: false}}/>
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
       <Drawer.Screen name="Arkkitehtuuri"  component={Architecture} />
        <Drawer.Screen name="Patsaat" component={Statue}/>
        <Drawer.Screen name="Taideteokset" component={Art} />
        <Drawer.Screen name="Historialliset kohteet" component={Histories} />
        <Drawer.Screen name="Puistot" component={Park}/>
        <Drawer.Screen name="Tietoa Meistä" component={AboutUs}/>
      </Drawer.Navigator>
    );
  }
  
 

  const [loaded] = useFonts({
    ManropeRegular: require('./assets/fonts/Manrope-Regular.ttf'),
    ManropeBold: require('./assets/fonts/Manrope-ExtraBold.ttf'),
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
      <Tab.Screen name='Haku' component={Search} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='search' size={size} color={color} />
      )}}/>
      <Tab.Screen name='Kategoriat' component={MyDrawer} options={{headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='menu' size={size} color={color} />     
      )}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}