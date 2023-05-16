import React from 'react';
import {ImageBackground, View, Text, Image, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/background.jpg")}
                resizeMode="contain"
                style={styles.background}>
            <Image
                style={styles.logo}
                source={require("../assets/Notes-icon.png")}
            />
            <Text style={styles.text}>Write everything down.</Text>
                <Button title="Go to Notes" onPress={() => navigation.navigate('Notes')} />
            </ImageBackground>
        </View>

    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    background: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: '15%',
        marginTop: '10%'
    },
    text: {
        color: 'black',
        marginLeft: '30%',
        marginTop: '10%'

    }

};