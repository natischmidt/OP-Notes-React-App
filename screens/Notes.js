import React, { useState } from "react";
import { View } from "react-native";
import Note from "../components/Note";
import CreateNote from "../components/CreateNote";
import { v4 as uuid } from "uuid";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");

    const textHandler = (text) => {
        setText(text);
    };

    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: text,
            },
        ]);
        setText("");
    };

    const deleteHandler = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    return (
        <View>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteHandler={deleteHandler}
                />
            ))}
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={text}
            />
        </View>
    );
}