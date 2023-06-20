import React, { useState } from 'react';
import { ImageBackground, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Note from '../components/Note';
import CreateNote from '../components/CreateNote';
import { v4 as uuid } from 'uuid';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const textHandler = (text) => {
        setText(text);
    };

    const dateHandler = (date) => {
        setDate(date);
    };

    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: text,
                date: date,
            },
        ]);
        setText('');
        setDate('');
    };

    const deleteHandler = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    const handleOverlayPress = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.background}>
                    {notes.map((note) => (
                        <Note key={note.id} id={note.id} text={note.text} date={note.date} deleteHandler={deleteHandler} />
                    ))}
                    <CreateNote
                        textHandler={textHandler}
                        saveHandler={saveHandler}
                        inputText={text}
                        dateHandler={dateHandler}
                        date={date}
                    />
                    <Note
                    id={0}
                    text={'Your notes will appaer here'}
                    date={'00.00.00'}
                    deleteHandler={deleteHandler}>
                    </Note>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 250,
        height: 250,
        marginLeft: '14%',
        marginTop: '10%',
    },
    text: {
        color: 'black',
        marginLeft: '30%',
        marginTop: '10%',
    },
});
