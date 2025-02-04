import React from "react";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

const images = [
  {
    name: require("@/assets/placeholder-images/1.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/2.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/3.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/4.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/5.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/6.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/7.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/8.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/1.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/2.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/3.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/4.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/5.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/6.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/7.jpg"),
  },
  {
    name: require("@/assets/placeholder-images/8.jpg"),
  },
];

export default function GallerySection() {
  return (
    <ThemedView style={[styles.container, { minHeight: "100%" }]}>
      {images.map((image, index) => (
        <Image
          key={index}
          style={styles.image}
          source={image.name}
          transition={1000}
        />
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 40,
    marginTop: 10,
  },
  image: {
    height: 120,
    width: 130,
    objectFit: "cover",
    borderRadius: 10,
  },
});
