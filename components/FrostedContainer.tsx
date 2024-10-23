// components/FrostedContainer.tsx

import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { Colors } from '@/constants/Colors';

interface FrostedContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const FrostedContainer: React.FC<FrostedContainerProps> = ({ children, style }) => {
    return (
        <BlurView intensity={50} style={[styles.container, style]}>
    <View style={styles.innerContainer}>
        {children}
        </View>
        </BlurView>
);
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: Colors.light.frostedBackground,
        // Shadows for depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5, // For Android shadow
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FrostedContainer;
