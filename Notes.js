import {React, useState} from "react";
import { View} from "react-native";
import Note from "./Note"
import {StyleSheet} from "react-native";
import CreateNote from "./CreateNote";


export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");

    return (
        <View style={styles.notes}>
            <Note/>
            <Note/>
            <CreateNote/>
        </View>
    );
}
const styles = StyleSheet.create({
    notes: {
//wip
    },
});