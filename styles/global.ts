// styles/global.ts

import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

// Common Variables
const commonPadding = 20;
const commonMargin = 10;
const borderRadius = 8;
const fontSizes = {
    small: 14,
    medium: 18,
    large: 24,
    title: 32,
};
const fonts = {
    primary: 'Afacad', // Main custom font
    secondary: 'SpaceMono-Regular', // Secondary font
};

export const globalStyles = StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: commonPadding,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '80%',
        padding: commonPadding,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },

    signupContainer: {
        marginTop: commonMargin * 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Text
    title: {
        fontSize: fontSizes.title,
        fontFamily: fonts.primary,
        textAlign: 'center',
        marginVertical: commonMargin * 2,
        color: Colors.light.text,
    },
    text: {
        fontSize: fontSizes.medium,
        fontFamily: fonts.secondary + '!important',
        color: Colors.light.text,
    },
    linkText: {
        color: Colors.light.tint,
        textAlign: 'center',
        fontSize: fontSizes.medium,
        fontFamily: fonts.primary,
    },
    errorText: {
        color: 'red',
        marginVertical: commonMargin,
        textAlign: 'center',
        fontSize: fontSizes.small,
        fontFamily: fonts.secondary,
    },

    // Inputs
    input: {
        marginVertical: commonMargin,
        padding: commonPadding,
        borderWidth: 1,
        borderColor: Colors.light.icon,
        borderRadius: borderRadius,
        color: Colors.light.text,
        backgroundColor: Colors.light.background,
        width: '100%',
    },

    // Buttons
    button: {
        fontFamily: fonts.secondary,
        backgroundColor: Colors.light.tint,
        padding: commonPadding,
        borderRadius: borderRadius,
        margin: commonMargin,
        maxWidth: '60%',
        width: '50%', // Ensure button spans the container's width
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: fonts.primary,
        fontSize: fontSizes.large,
        color: Colors.light.background,
        textAlign: 'center',
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },

    // Frosted Effect
    frostedEffect: {
        backgroundColor: Colors.light.frostedBackground,
        padding: commonPadding,
        borderRadius: borderRadius,
        // Optional: Add opacity or other styles to enhance frosted effect
    },
});
