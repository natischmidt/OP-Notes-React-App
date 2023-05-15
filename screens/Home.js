import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
// import {View} from "react-native";
// import Header from "./Header"
// import {NavigationContainer} from "@react-navigation/native";

export default function Home() {


    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <Image
                style={styles.logo}
                source={require("../assets/notesIcon.jpg")}
            />
        </View>

    );
}
const styles = {
    container: {
     backgroundColor: `#4682b4`,
    },

    logo: {
        marginLeft:60,
        marginRight:50,
        marginTop: 50,
        width: 250,
        height: 250,
        marginBottom: 50
    }

};