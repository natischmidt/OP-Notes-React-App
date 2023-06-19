import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";


export function AppListItem({ name }) {
    return (
        <TouchableOpacity style={styles.appItem}>
            <Text style={styles.appName}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
    },
    appName: {
        fontSize: 16,
    },
});


