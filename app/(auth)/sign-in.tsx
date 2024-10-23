// app/(auth)/sign-in.tsx

import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import {Text, TextInput, Button, View, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import { globalStyles } from '@/styles/global';
import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';

export default function SignInScreen() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    // Determine container width based on orientation
    const containerWidth = isLandscape ? '60%' : '80%';
    const maxContainerWidth = 400; // Maximum width in pixels

    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                router.replace('/authenticated/(tabs)/images');  // Redirect to the authenticated page
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
                setError("Sign in incomplete. Please check your credentials.");
            }
        } catch (err: any) {
            setError('Failed to sign in. Please try again.');
            console.error(JSON.stringify(err, null, 2));
        }
    }, [isLoaded, emailAddress, password, signIn, setActive, router]);

    return (
        <View style={globalStyles.container}>
            <BlurView intensity={50} style={[{ width: containerWidth, maxWidth: maxContainerWidth }, globalStyles.frostedEffect]}>
                <Text style={globalStyles.title}>Sign In</Text>
                {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}
                <TextInput
                    style={globalStyles.input}
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email..."
                    onChangeText={setEmailAddress}
                    placeholderTextColor={Colors.light.icon} // Assuming 'Colors.light.icon' is defined
                />
                <TextInput
                    style={globalStyles.input}
                    value={password}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    placeholderTextColor={Colors.light.icon} // Assuming 'Colors.light.icon' is defined
                />
                <View style={globalStyles.signupContainer}>
                    <TouchableOpacity onPress={onSignInPress} style={[globalStyles.button, globalStyles.shadow]}>
                        <Text style={globalStyles.buttonText}> Sign In </Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.signupContainer}>
                    <Text style={globalStyles.text}>Don't have an account? </Text>
                    <Link href="/(auth)/sign-up">
                        <Text style={globalStyles.linkText}>Sign up :)</Text>
                    </Link>
                </View>
            </BlurView>
        </View>
    );
}
