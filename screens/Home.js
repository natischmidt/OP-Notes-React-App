import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Notes');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                resizeMode="cover"
                style={styles.background}
            >
                <Image style={styles.logo} source={require('../assets/Notes-icon.png')} />
                <Text style={styles.text}>Write everything down.</Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Go to Notes</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: '14%',
        marginTop: '10%',
    },
    text: {
        color: 'black',
        marginLeft: '30%',
        marginTop: '10%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
};
