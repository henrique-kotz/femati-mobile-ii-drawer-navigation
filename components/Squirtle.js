import React from 'react';
import { View, Image, Text } from 'react-native';

import Pokemon from '../assets/images/squirtle.png';
import styles from '../assets/styles';

export default function Squirtle() {
    return (
        <View style={styles.container}>
            <Image source={Pokemon} style={styles.image} />
            <Text style={styles.title}>Squirtle</Text>
            <Text style={styles.description}>Type: Water</Text>
        </View>
    )
}