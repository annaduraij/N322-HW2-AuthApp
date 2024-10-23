JAuthClerkApp


Table of Contents
Introduction
Features
Tech Stack
Installation
Running the App
Usage
Project Structure
Acknowledgements
Contact
Introduction
JAuthClerkApp is a React Native Expo application designed to demonstrate Clerk authentication within a mobile environment. The app features a tab-based navigation system, allowing users to seamlessly sign up, sign in, and manage their portfolios. This project serves as a practical implementation to test and validate Clerk's authentication capabilities in a React Native Expo setup.

Features
User Authentication: Secure sign-up, sign-in, and sign-out functionalities powered by Clerk.
Tab Navigation: Intuitive navigation with at least three styled tabs.
Styled Interface: Consistent and aesthetically pleasing design with a dark grey primary palette and mint accents.
User Profile: Displays authenticated user's email and avatar.
Portfolio Management: Allows users to view and manage their portfolio.
Logout Functionality: Easy logout process that redirects users to the home screen.
Integrated Images: Incorporates stock images to enhance visual appeal.
Tech Stack
Framework: React Native with Expo
Authentication: Clerk
State Management: React Hooks
Styling: StyleSheet API
Icons: @expo/vector-icons
Additional Packages:
expo-linear-gradient
expo-blur
expo-secure-store
react-dom
react-native-web
@expo/metro-runtime
Installation
Prerequisites
Node.js: Ensure you have Node.js v18.8 installed. You can download it from here.

npm: Comes bundled with Node.js, version 8.18.

Expo CLI: Install globally using npm if not already installed.

bash
Copy code
npm install -g expo-cli
Steps
Clone the Repository

bash
Copy code
git clone https://github.com/annaduraij/N322-HW2-AuthApp.git
Navigate to the Project Directory

bash
Copy code
cd N322-HW2-AuthApp
Install Dependencies

bash
Copy code
npm install
Install Expo Dependencies

bash
Copy code
npx expo install react-dom react-native-web @expo/metro-runtime
npx expo install expo-linear-gradient
npx expo install expo-blur
npx expo install @expo/vector-icons
Install Additional Packages

bash
Copy code
npm install @clerk/clerk-expo
npm install expo-secure-store
Running the App
Start the Development Server

bash
Copy code
npm start
Run on Your Device

Using Expo Go:
Download the Expo Go app from the App Store or Google Play Store.
Scan the QR code displayed in the terminal or browser after running npm start.
Using an Emulator:
Ensure you have an Android or iOS emulator set up.
Press a for Android or i for iOS in the terminal to launch the app on the emulator.
Usage
Sign Up / Sign In

Upon launching the app, users can sign up or sign in using their credentials.
Clerk handles the authentication process, ensuring secure access.
Navigate Through Tabs

After authentication, users gain access to the tab navigation system.
The app includes at least three styled tabs:
Home
Images
Portfolio
Manage Portfolio

Within the Portfolio tab, users can view their portfolio.
The logout button is conveniently located here, allowing users to sign out and return to the home screen.
Logout

Tapping the Logout button signs the user out and redirects them to the home screen.
This ensures that authenticated tabs are no longer accessible until the user signs back in.
Project Structure
scss
Copy code
N322-HW2-AuthApp/
├── assets/
│   ├── images/
│   │   └── stock/
│   │       └── [stock images]
│   └── logo.png
├── app/
│   └── authenticated/
│       └── (tabs)/
│           ├── images.tsx
│           └── portfolio.tsx
├── components/
│   └── FrostedContainer.tsx
├── constants/
│   └── Colors.ts
├── styles/
│   └── global.ts
├── package.json
└── README.md
Acknowledgements
Clerk.dev: For providing robust authentication solutions.
Expo: For simplifying the development and deployment of React Native apps.
ChatGPT: Significant contributions were made with ChatGPT assisting in advisory and debugging perspectives to enhance the development process of this application.