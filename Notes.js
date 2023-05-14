import {React, useState} from "react";
import {View} from "react-native";
import Note from "./Note"
import MyHeader from "./MyStack"
import CreateNote from "./CreateNote";



export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");


    return (
        <View>
            <CreateNote/>
            <Note/>
            <Note/>
        </View>
    );
}
