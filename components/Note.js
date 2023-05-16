import React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native";

export default function Note({ id, text,date, deleteHandler }) {

    const handleDelete = () => {
        deleteHandler(id);
    };

    return (
        <View style={styles.note}>
            <View style={styles.noteBody}>
                <Text>{text || ""}</Text>
                <Text>Date: {date}</Text>
            </View>
                <View style={styles.noteFooter}>
                    <TouchableOpacity style={styles.button} onPress={handleDelete}>
                        <Text style={styles.buttonText}>DELETE</Text>
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
        flexDirection: "column",
        justifyContent: "space-between",
        overflowWrap: "break-word",
    },
    noteBody: {},
    noteFooter: {
        justifyContent: 'flex-end',
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
};