// app/authenticated/(tabs)/images.tsx

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    Platform,
} from "react-native";
import FrostedContainer from "@/components/FrostedContainer";
import { globalStyles } from "@/styles/global";
import images from "../../../assets/images/stock/images";

const numColumns = 4; // 2 columns for 2x2 grid

// Calculate item size based on screen width
const { width } = (Dimensions.get("window"));
const ITEM_MARGIN = 0;
const ITEM_SIZE = (width/2 - (numColumns + 1) * ITEM_MARGIN) / numColumns;

export default function ImagesScreen() {
    // Prepare image data (limit to 4 images for 2x2 grid)
    const imageData = images.slice(0, 16).map((image, index) => ({
        id: index.toString(),
        source: image,
    }));

    // @ts-ignore
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image
                source={item.source}
                style={styles.image}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={`Image ${item.id}`}
            />
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <FrostedContainer style={styles.frostedContainer}>
                <Text style={globalStyles.title}>All Images</Text>

            </FrostedContainer>
            <FrostedContainer style={styles.frostedContainer}>
                <FlatList
                    data={imageData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    contentContainerStyle={styles.flatListContent}
                    columnWrapperStyle={styles.columnWrapper}
                    scrollEnabled={false}
                />
            </FrostedContainer>

        </View>
    );
}

const styles = StyleSheet.create({
    frostedContainer: {
        padding: 20,
        width: "auto",
        borderRadius: 15,
        margin: '1%',
        alignItems: "center",
    },
    flatListContent: {
        justifyContent: "space-between",
    },
    columnWrapper: {
        justifyContent: "space-between",
    },
    imageContainer: {
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        margin: '0%',
        borderRadius: 5,

    },
    image: {
        width: "100%",
        height: "100%",
    },
});
