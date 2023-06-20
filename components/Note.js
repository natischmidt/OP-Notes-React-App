import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import MyButton from "./MyButton";

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
                    <MyButton
                        style={styles.button}
                        onPress={handleDelete}
                        text="DELETE"
                    />
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
});