import React from "react";
import { View, TextInput, Button,TouchableOpacity } from "react-native";

export default function CreateNote() {
    let handleSaveNote;
    return (

        <View style={styles.note}>

            <TextInput
                style={styles.noteInput}
                placeholder="Type your note"
                maxLength={100}
                multiline={true}
            />
            <View style={styles.noteFooter}>
                <TouchableOpacity style={styles.Button}>
                    <Button title="SAVE" onPress={handleSaveNote} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    note: {
    },

};

