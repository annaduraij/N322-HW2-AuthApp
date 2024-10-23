// constants/Colors.ts

const mintColor = '#58F7AA'; // Darker minty green
const frostedBackground = 'rgba(30, 30, 30, 0.5)'; // Semi-transparent frosted effect

export const Colors = {
    light: {
        // Shades of Charcoal
        charcoal100: '#333333', // Dark Grey
        charcoal200: '#2D2D2D',
        charcoal300: '#262626',
        charcoal400: '#1F1F1F',
        charcoal500: '#1A1A1A',
        charcoal600: '#141414',
        charcoal700: '#0D0D0D', // Very Dark Grey

        // Minty Greens
        mint100: '#A5FFDA',
        mint200: '#88FFCC',
        mint300: '#6EFFBF',
        mint400: '#53FFB3',
        mint500: '#38FFAA',

        // Other Colors
        text: '#E5E5E5', // Light text on dark background
        background: '#1E1E1E',
        tint: mintColor,
        icon: '#A5A5A5',
        tabIconDefault: '#A5A5A5',
        tabIconSelected: mintColor,
        frostedBackground: frostedBackground,
    },
    dark: {
        // Shades of Charcoal
        charcoal100: '#FFFFFF', // White text for dark mode
        charcoal200: '#F0F0F0',
        charcoal300: '#E0E0E0',
        charcoal400: '#D0D0D0',
        charcoal500: '#C0C0C0',
        charcoal600: '#B0B0B0',
        charcoal700: '#A0A0A0',

        // Minty Greens
        mint100: '#A5FFDA',
        mint200: '#88FFCC',
        mint300: '#6EFFBF',
        mint400: '#53FFB3',
        mint500: '#38FFAA',

        // Other Colors
        text: '#FFFFFF',
        background: '#0D0D0D',
        tint: mintColor,
        icon: '#A5A5A5',
        tabIconDefault: '#A5A5A5',
        tabIconSelected: mintColor,
    },
    jay: {
        inactive: '#222222',
        active: mintColor,
    },
};
