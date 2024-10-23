// app/(auth)/sign-up.tsx

import React from 'react';
import {TextInput, Button, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter, Link } from 'expo-router';
import { globalStyles } from '@/styles/global';
import { Colors } from '@/constants/Colors';
import { BlurView } from 'expo-blur';

export default function SignUpScreen() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [error, setError] = React.useState('');

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    // Determine container width based on orientation
    const containerWidth = isLandscape ? '60%' : '80%';
    const maxContainerWidth = 400; // Maximum width in pixels

    // Handle the sign-up process
    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: 'email_code',
            });

            setPendingVerification(true);
            setError(''); // Clear error on success
        } catch (err: any) {
            setError('Failed to sign up. Please try again.');
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // Handle email verification
    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                router.replace('/authenticated/(tabs)/images'); // Navigate to authenticated page after successful sign-up
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2));
                setError('Email verification incomplete. Please try again.');
            }
        } catch (err: any) {
            setError('Failed to verify email. Please try again.');
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <View style={globalStyles.container}>
            <BlurView intensity={50} style={[{ width: containerWidth, maxWidth: maxContainerWidth }, globalStyles.frostedEffect]}>
                {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}
                {!pendingVerification ? (
                    <>
                        <Text style={globalStyles.title}>Sign Up</Text>
                        <TextInput
                            style={globalStyles.input}
                            autoCapitalize="none"
                            value={emailAddress}
                            placeholder="Email..."
                            onChangeText={setEmailAddress}
                            placeholderTextColor={Colors.light.icon}
                        />
                        <TextInput
                            style={globalStyles.input}
                            value={password}
                            placeholder="Password..."
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            placeholderTextColor={Colors.light.icon}
                        />

                        <View style={globalStyles.signupContainer}>
                            <TouchableOpacity onPress={onSignUpPress} style={[globalStyles.button, globalStyles.shadow]}>
                                <Text style={globalStyles.buttonText}> Sign Up </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyles.signupContainer}>
                            <Text style={globalStyles.text}>Already have an Account? </Text>
                            <Link href="/(auth)/sign-in">
                                <Text style={globalStyles.linkText}>Sign in =)</Text>
                            </Link>
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={globalStyles.title}>Verify Your Email</Text>
                        <TextInput
                            style={globalStyles.input}
                            value={code}
                            placeholder="Verification Code..."
                            onChangeText={setCode}
                            placeholderTextColor={Colors.light.icon}
                        />
                        <View style={globalStyles.signupContainer}>
                            <TouchableOpacity onPress={onPressVerify} style={[globalStyles.button, globalStyles.shadow]}>
                                <Text style={globalStyles.buttonText}> Verify Email </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </BlurView>
        </View>
    );
}
