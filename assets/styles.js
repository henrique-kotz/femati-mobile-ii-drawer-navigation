import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 110.5
    },
    image: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: '1.5rem',
        textAlign: 'center',
        marginVertical: '1rem'
    },
    description: {
        fontSize: '1rem',
        textAlign: 'center'
    }
});

export default styles;