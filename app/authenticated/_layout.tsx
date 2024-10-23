// app/authenticated/_layout.tsx

import React from "react";
import { Slot } from "expo-router";
import GradientBackground from "@/components/GradientBackground";

export default function AuthenticatedLayout() {
    return (
        <GradientBackground>
            <Slot /> {/* Renders the (tabs)/_layout.tsx */}
        </GradientBackground>
    );
}
