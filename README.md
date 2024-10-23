
# JAuthClerkApp

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)


## Introduction
JAuthClerkApp is a React Native Expo application designed to demonstrate Clerk authentication within React Native Expo Tech Stack.
The app features a tab-based navigation system, allowing users to seamlessly sign up, sign in, and manage their portfolios.
The project serves as a practical implementation to test and validate Clerk's authentication capabilities in a React Native Expo setup.

## Features
- **User Authentication**: Secure sign-up, sign-in, and sign-out functionalities powered by Clerk.
- **Tab Navigation**: Intuitive navigation with at least three styled tabs.
- **Styled Interface**: Consistent and aesthetically pleasing design with a dark grey primary palette and mint accents.
- **User Profile**: Displays authenticated user's email and avatar.
- **Portfolio Management**: Allows users to view and manage their portfolio.
- **Logout Functionality**: Easy logout process that redirects users to the home screen.
- **Integrated Images**: Incorporates stock images to enhance visual appeal.

## Tech Stack
- **Framework**: React Native with Expo
- **Authentication**: Clerk
- **Package Manager**: Node & NPM

### Additional Packages:
- expo-linear-gradient (Styling)
- expo-blur (Styling)
- expo-secure-store (Env)
- react-dom (Core)
- react-native-web (Core)

## Installation

### Prerequisites
- **Node.js**: App was built with Node.js v18.8. Download [here](https://nodejs.org/).
- **npm**: Application package management done with npm version 8.18.
- **Expo CLI**: Install globally using npm if not already installed.

```bash
npm install -g expo-cli
```

### Steps

1. **Clone the Repository**
```bash
git clone https://github.com/annaduraij/N322-HW2-AuthApp.git
```
2. **Navigate to the Project Directory**
```bash
cd N322-HW2-AuthApp
```
3. **Reset and then Install Dependencies**
```bash
npm reset
npm install
```
4. **Install Clerk**
```bash
npm install @clerk/clerk-expo
npm install expo-secure-store
```
5. **Install Expo Dependencies**
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
npx expo install expo-linear-gradient
npx expo install expo-blur
npx expo install @expo/vector-icons
```

## Running the App

### Start the Development Server
```bash
npm start
```

### Run on Device

**Using Expo Go**:
- Download the Expo Go app from the App Store or Google Play Store.
- Scan the QR code displayed in the terminal or browser after running npm start.

**Using an Emulator**:
- Ensure you have an Android or iOS emulator set up.
- Press `a` for Android or `i` for iOS in the terminal to launch the app on the emulator.

## Usage

### Sign Up / Sign In
- Upon launching the app, users can sign up or sign in using their credentials.
- Clerk handles the authentication process, ensuring secure access.

### Navigate Through Tabs
- After authentication, users gain access to the tab navigation system.
- The app includes at least three styled tabs:
    - **Images**
    - **Collections**
    - **Portfolio**

### Images & Collections
- Images available for viewing here, all images are stock images.
- In future iterations, collection functionality will be improved.

### Manage Portfolio
- Within the Portfolio tab, users can view their portfolio.
- The logout button is located here.

### Logout
- Tapping the Logout button signs the user out and redirects them to the home screen.
- This ensures that authenticated tabs are no longer accessible until the user signs back in.

## Acknowledgements
- **`Clerk.dev`**: Followed Clerk Authentication Documents
- **`ChatGPT`**: Contributions in debugging, and styling perspectives
- **`Pexels.com`**: All Stock Images downloaded from `Pexels.com`, attribution on request