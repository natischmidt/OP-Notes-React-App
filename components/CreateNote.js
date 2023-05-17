import React from "react";
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from "react-native";

export default function CreateNote({ textHandler, saveHandler, dateHandler, date, text }) {


    return (

        <View style={styles.note}>
            <View style={styles.noteHeader}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.date}
                    placeholder="Enter date"
                    value={date}
                    maxLength={10}
                    onChangeText={dateHandler}
                />
            </View>
            <TextInput
                style={styles.noteInput}
                value={text}
                placeholder="Type your note"
                maxLength={100}
                onChangeText={textHandler}
                multiline={true}
            />

            <View style={styles.noteFooter}>
                <TouchableOpacity style={styles.button} onPress={saveHandler}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    note: {
        borderRadius: 15,
        borderWidth: 1.5,
        padding: 15,
        minHeight: 140,
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowWrap: 'break-word',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },

});

