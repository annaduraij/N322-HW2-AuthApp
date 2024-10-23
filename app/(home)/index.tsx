// app/(home)/index.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { Colors } from "../../constants/Colors";
import FrostedContainer from "../../components/FrostedContainer";

export default function HomeScreen() {
    return (
        <View style={globalStyles.container}>
            <FrostedContainer style={styles.frostedContainer}>
                <Text style={globalStyles.title}>Imagize</Text>

                <View style={styles.descriptionContainer}>
                    <Text style={globalStyles.text}>
                        At Imagize, we understand the passion for sharing beautiful moments. For those who appreciate stunning
                        photography, we offer a platform to organize, share, and collaborate on your favorite images. Discover,
                        curate, and showcase your photo collections effortlessly.
                    </Text>
                </View>

                <View style={globalStyles.buttonContainer}>

                    <TouchableOpacity style={[globalStyles.button, globalStyles.shadow]}>
                        <Link href="/(auth)/sign-in" style={globalStyles.buttonText}>
                            Sign In
                        </Link>
                    </TouchableOpacity>

                    <TouchableOpacity style={[globalStyles.button, globalStyles.shadow]}>
                        <Link href="/(auth)/sign-up" style={globalStyles.buttonText}>
                            Sign Up
                        </Link>
                    </TouchableOpacity>

                    {/* Optional: Add a third button if needed */}
                </View>
            </FrostedContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    frostedContainer: {
        width: "auto",
        padding: 20,
        borderRadius: 10,
        backgroundColor: Colors.light.frostedBackground,
    },
    descriptionContainer: {
        padding: 20,
        maxWidth: 600,
        borderRadius: 10,
        marginVertical: 20,
        backgroundColor: Colors.light.frostedBackground,
    },
});
