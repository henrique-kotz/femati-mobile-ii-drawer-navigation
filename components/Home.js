import React from 'react';
import { View, Image, Text } from 'react-native';

import Logo from '../assets/images/capa.png';
import styles from '../assets/styles.js';

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.title}>Starter Pokemon - Kanto</Text>
        </View>
    );
}