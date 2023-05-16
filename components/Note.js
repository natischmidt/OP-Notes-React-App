import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function Note({ id, text,date, deleteHandler }) {
    return (
        <View style={styles.note}>
            <View style={styles.noteBody}>
                <Text>{text || ""}</Text>
                <Text>Date: {date}</Text>
            </View>
            <View style={[styles.noteFooter, { justifyContent: "flex-end" }]}>
                <TouchableOpacity style={styles.Button}>
                    <Button title="DELETE" onPress={() => deleteHandler(id)} />
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
        shadowOffset: { width: -6, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    noteBody: {},
    noteFooter: {},
    Button: {},
};