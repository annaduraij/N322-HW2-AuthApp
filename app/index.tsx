// app/index.ts

import React from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
    const { isSignedIn, isLoaded } = useAuth();

    // While authentication status is loading, show a loading indicator
    if (!isLoaded) {
        return (
            <Redirect href="/loading" />
        );
    }

    // If the user is signed in, redirect to authenticated tabs
    if (isSignedIn) {
        return <Redirect href="/authenticated/(tabs)/images" />;
    }

    // If not signed in, redirect to the Home screen
    return <Redirect href="/(home)/" />;
}
