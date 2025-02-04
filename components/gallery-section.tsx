import React from "react";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function GallerySection() {
  return (
    <ThemedView style={[styles.container, { minHeight: "100%" }]}>
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/1.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/2.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/3.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/4.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/5.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/6.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/7.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/8.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/1.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/2.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/3.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/4.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/5.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/6.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/7.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/8.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/7.jpg")}
        transition={1000}
      />
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/8.jpg")}
        transition={1000}
      />
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
