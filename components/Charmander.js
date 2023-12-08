import React from 'react';
import { View, Image, Text } from 'react-native';

import Pokemon from '../assets/images/charmander.png';
import styles from '../assets/styles';

export default function Charmander() {
    return (
        <View style={styles.container}>
            <Image source={Pokemon} style={styles.image} />
            <Text style={styles.title}>Charmander</Text>
            <Text style={styles.description}>Type: Fire</Text>
        </View>
    );
}