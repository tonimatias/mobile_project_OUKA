import React from 'react';
import { View, Image} from 'react-native';
import styles from '../style/styles';
import { Ionicons } from '@expo/vector-icons';



//, {backgroundColor: isDarkMode ? styles.headerDark.backgroundColor : styles.headerLight.backgroundColor}

export default Header = (props) => {
    //const isDarkMode = true;
    const { isDarkmode} = props
    
    return (
        <View style={[styles.header, { backgroundColor: isDarkmode ? styles.headerDark.backgroundColor : styles.headerLight.backgroundColor }]}>
            <Ionicons style={styles.themeButton} name={isDarkmode ? 'sunny-outline' : 'moon-outline'} size={25} color='#9600AE' onPress={props.toggleDarkMode}/>
            <Image
                style={styles.headerlogo}
                source={require('../pictures/ouluawaits_logo_2.0.png')}
                resizeMode='contain'
            />
        </View>
    )
}