import React from "react";
import { View,Button} from "react-native";

export default function Note() {
    return (

        <View style={styles.note}>
            <View style={styles.noteBody}></View>
            <View style={[styles.noteFooter, { justifyContent: "flex-end" }]}>

                <Button title="Delete Note" onPress={handleDeleteNote} />
            </View>
        </View>

    );

}