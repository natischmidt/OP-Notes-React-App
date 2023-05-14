import {React, useState} from "react";
import {View} from "react-native";
import Note from "./Note"
import Header from "./Header"
import CreateNote from "./CreateNote";



export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");


    return (
        <View>
            <Header/>
            <CreateNote/>
            <Note/>
            <Note/>
        </View>
    );
}
