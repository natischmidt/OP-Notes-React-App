import React from "react";
import {View, Button, TouchableOpacity} from "react-native";

export default function Note() {
    let handleDeleteNote;
    return (

        <View style={styles.note}>
            <View style={styles.noteBody}></View>
            <View style={[styles.noteFooter, { justifyContent: "flex-end" }]}>
                <TouchableOpacity style={styles.Button}>
                    <Button title="DELETE NOTE" onPress={handleDeleteNote} />
                </TouchableOpacity>
            </View>
        </View>

    );

}

const styles = {
    note: {

    },
    noteBody: {

    },
    noteFooter: {

    },

    noteSaveButton: {

    },
    noteSaveButtonText: {

    },
};

