import {React, useState} from "react";
import {View} from "react-native";
import Note from "./Note"
import MyHeader from "./Header"
import CreateNote from "./CreateNote";



export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");


    return (
        <View>
            <MyHeader/>
            <CreateNote/>
            <Note/>
            <Note/>
        </View>
    );
}
