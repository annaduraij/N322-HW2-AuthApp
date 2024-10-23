// app/loading.tsx

import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.light.tint} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: 20,
        color: Colors.light.text,
        fontSize: 18,
        fontFamily: "SpaceMono-Regular", // Ensure this font is loaded
    },
});
