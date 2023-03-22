import React from 'react';
import { Text, View} from 'react-native';
import styles from '../style/styles';


export default Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
               Haku
            </Text>
        </View>
    )
}