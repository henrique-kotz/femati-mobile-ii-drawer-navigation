import React from 'react';
import { View, Image, Text } from 'react-native';

import Pokemon from '../assets/images/bulbasaur.png';
import styles from '../assets/styles';

export default function Bulbasaur() {
    return (
        <View style={styles.container}>
            <Image source={Pokemon} style={styles.image} />
            <Text style={styles.title}>Bulbasaur</Text>
            <Text style={styles.description}>Type: Grass/Poison</Text>
        </View>
    );
}