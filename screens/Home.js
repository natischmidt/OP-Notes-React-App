import React from 'react';
import {ImageBackground, View, Text, Image, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from "react-native-gesture-handler";


export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/background.jpg")}
                resizeMode="cover"
                style={styles.background}>
            <Image
                style={styles.logo}
                source={require("../assets/Notes-icon.png")}
            />
            <Text style={styles.text}>Write everything down.</Text>
                <TouchableOpacity style={styles.Button}>
                <Button title="Go to Notes" onPress={() => navigation.navigate('Notes')} />
                </TouchableOpacity>
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
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    background: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: '14%',
        marginTop: '10%'
    },
    text: {
        color: 'black',
        marginLeft: '30%',
        marginTop: '10%'

    }

};