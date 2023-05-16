import React from "react";
import { View, TextInput, Button,TouchableOpacity } from "react-native";

export default function CreateNote({ textHandler, saveHandler, text }) {


    return (

        <View style={styles.note}>
            <View style={styles.noteHeader}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.date}
                    placeholder="Enter date"
                    maxLength={10}
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
                <TouchableOpacity style={styles.Button}>
                    <Button title="SAVE" onPress={saveHandler} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    note: {
        borderRadius: 15,
        borderWidth: 1.5,
        padding: 15,
        minHeight: 140,
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowWrap: 'break-word',
        shadowOffset: { width: -6, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },

};

