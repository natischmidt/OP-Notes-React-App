import React from "react";
import {View, Button, TouchableOpacity} from "react-native";

export default function Note() {
    let handleDeleteNote;
    return (

        <View style={styles.note}>
            <View style={styles.noteBody}></View>
            <View style={[styles.noteFooter,
                { justifyContent: "flex-end" }]}>
                <TouchableOpacity style={styles.Button}>
                    <Button title="DELETE" onPress={handleDeleteNote} />
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
    noteBody: {

    },
    noteFooter: {

    },

    Button: {

    },

};

