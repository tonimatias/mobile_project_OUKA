import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from '../style/styles';


export default Header = () => {
    return (
        <View style={styles.header}>
            <Image
        style={styles.headerlogo}
        source={require('../pictures/ouluawaits_logo_2.0.png')}
        resizeMode='contain'
      />
        </View>
    )
}