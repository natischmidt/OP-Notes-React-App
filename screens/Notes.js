import {React, useState} from "react";
import {View} from "react-native";
import Note from "../components/Note"
import MyHeader from "../components/MyStack"
import CreateNote from "../components/CreateNote";



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
