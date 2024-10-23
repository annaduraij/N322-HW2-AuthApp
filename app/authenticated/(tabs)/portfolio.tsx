// app/authenticated/(tabs)/portfolio.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import FrostedContainer from "@/components/FrostedContainer";
import { globalStyles } from "@/styles/global";
import { Colors } from "@/constants/Colors";

export default function PortfolioScreen() {
    const { signOut } = useClerk();
    const router = useRouter();
    const { user } = useUser();

    const handleLogout = async () => {
        try {
            await signOut();
            router.replace("/"); // Redirect to home page after logout
        } catch (error) {
            console.error("Error signing out:", error);
            // Optionally, display an error message to the user
        }
    };

    // Safely extract the user's primary email and avatar URL
    const userEmail = user?.emailAddresses?.find(email => email.id === user.primaryEmailAddressId)?.emailAddress;
    const userAvatar = user?.imageUrl; // Clerk typically provides an 'imageUrl' for the user's avatar

    return (
        <View style={globalStyles.container}>
            <FrostedContainer style={styles.frostedContainer}>
                {/* User Avatar */}
                {userAvatar ? (
                    <Image
                        source={{ uri: userAvatar }}
                        style={styles.avatar}
                        resizeMode="cover"
                        accessible={true}
                        accessibilityLabel="User Avatar"
                    />
                ) : (
                    <View style={styles.placeholderAvatar}>
                        <Text style={styles.placeholderText}>A</Text>
                    </View>
                )}

                {/* Display User's Email */}
                {userEmail ? (
                    <Text style={globalStyles.text}>Logged in as: {userEmail}</Text>
                ) : (
                    <Text style={globalStyles.text}>Loading user information...</Text>
                )}

                {/* Informational Text About Imagize */}
                <Text style={styles.infoText}>
                    Welcome to Imagize! We are continuously working to enhance your experience.
                    Stay tuned for exciting updates and new features as we develop Imagize further.
                </Text>

                {/* Logout Button */}
                <TouchableOpacity onPress={handleLogout} style={[globalStyles.button, styles.logoutButton]}>
                    <Text style={globalStyles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </FrostedContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    frostedContainer: {
        // Override or extend global styles if necessary
        width: "auto", // Adjusts the container to 90% of the parent width
        alignItems: "center", // Centers content horizontally
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: globalStyles.container.padding,
    },
    placeholderAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.light.tint,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: globalStyles.container.padding,
    },
    placeholderText: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: globalStyles.title.fontFamily,
    },
    infoText: {
        fontSize: globalStyles.text.fontSize,
        color: Colors.light.text,
        marginBottom: globalStyles.container.padding,
        textAlign: "center",
        fontFamily: globalStyles.text.fontFamily,
    },
    logoutButton: {
        backgroundColor: Colors.light.tint,
        padding: globalStyles.button.padding,
        borderRadius: globalStyles.button.borderRadius,
    },
});
