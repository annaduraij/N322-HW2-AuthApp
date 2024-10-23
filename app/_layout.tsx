// app/_layout.tsx

import * as SecureStore from "expo-secure-store";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import React from "react";
import { useFonts } from "expo-font";
import { View, ActivityIndicator, Text } from "react-native";
import { globalStyles } from "@/styles/global";
import { Colors } from "@/constants/Colors";
import GradientBackground from "../components/GradientBackground";
import AuthenticatedLayout from "./authenticated/_layout"; // Import authenticated layout

export default function RootLayout() {
    const tokenCache = {
        async getToken(key: string) {
            try {
                const item = await SecureStore.getItemAsync(key);
                if (item) {
                    console.log(`${key} was used 🔐 \n`);
                } else {
                    console.log("No values stored under key: " + key);
                }
                return item;
            } catch (error) {
                console.error("SecureStore get item error: ", error);
                await SecureStore.deleteItemAsync(key);
                return null;
            }
        },
        async saveToken(key: string, value: string) {
            try {
                return SecureStore.setItemAsync(key, value);
            } catch (err) {
                console.error("SecureStore set item error: ", err);
            }
        },
    };

    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

    if (!publishableKey) {
        throw new Error(
            "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
        );
    }

    // Load the custom fonts before rendering the app
    const [fontsLoaded] = useFonts({
        Afacad: require("../assets/fonts/Afacad.ttf"),
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Playwrite: require("../assets/fonts/PlaywriteAustralia.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View
                style={{
                    ...globalStyles.container,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size="large" color={Colors.light.tint} />
                <Text style={{ marginTop: 20, color: Colors.light.text }}>Loading Fonts...</Text>
            </View>
        );
    }

    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
            <ClerkLoaded>
                <AppContent />
            </ClerkLoaded>
        </ClerkProvider>
    );
}

// AppContent component to handle redirection based on authentication
function AppContent() {
    const { isSignedIn } = useAuth();

    console.log("isSignedIn:", isSignedIn); // Debugging

    if (isSignedIn) {
        return <AuthenticatedLayout />; // Render authenticated layout with tabs
    } else {
        return (
            <GradientBackground>
                <Slot /> {/* Renders unauthenticated routes (e.g., Home, Sign In, Sign Up) */}
            </GradientBackground>
        );
    }
}
