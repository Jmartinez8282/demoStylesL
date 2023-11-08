import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkboard SE'
    }
})

export default AppText;