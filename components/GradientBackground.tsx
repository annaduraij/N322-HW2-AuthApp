// components/GradientBackground.tsx

import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

interface GradientBackgroundProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, style }) => {
    return (
        <LinearGradient
            colors={[Colors.light.charcoal700, Colors.light.charcoal500, Colors.light.charcoal700]}
    style={[styles.gradient, style]}
>
    {children}
    </LinearGradient>
);
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default GradientBackground;
