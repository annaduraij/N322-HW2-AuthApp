// app/authenticated/(tabs)/_layout.tsx

import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

// Define the type for MaterialIcons' name prop
type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: Colors.light.tabIconSelected,
                tabBarInactiveTintColor: Colors.light.tabIconDefault,
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: MaterialIconName = "circle"; // Initialize with a default icon

                    switch (route.name) {
                        case "images":
                            iconName = focused ? "image" : "image"; // MaterialIcons does not support outline
                            break;
                        case "collections":
                            iconName = focused ? "collections" : "collections"; // No outline variant
                            break;
                        case "portfolio":
                            iconName = focused ? "person" : "person"; // No outline variant
                            break;
                        default:
                            iconName = "circle"; // Ensure this icon exists in MaterialIcons
                    }

                    return <MaterialIcons size={size} color={color} name={iconName} />;
                },
            })}
        >
            <Tabs.Screen
                name="images"
                options={{
                    tabBarLabel: "Images",
                }}
            />
            <Tabs.Screen
                name="collections"
                options={{
                    tabBarLabel: "Collections",
                }}
            />
            <Tabs.Screen
                name="portfolio"
                options={{
                    tabBarLabel: "Portfolio",
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.light.charcoal700,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: "absolute",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
    },
});
