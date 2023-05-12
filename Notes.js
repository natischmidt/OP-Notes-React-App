import {React, useState} from "react";
import { View} from "react-native";
import Note from "./Note"
import {StyleSheet} from "react-native";


export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");

    return (
        <View style={styles.notes}>
            <Note/>
            <Note/>
            <Note/>
        </View>
    );
}
const styles = StyleSheet.create({
    notes: {
//wip
    },
});