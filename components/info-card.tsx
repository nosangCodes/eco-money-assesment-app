import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function InfoCard() {
  return (
    <ThemedView style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/placeholder-images/0.jpg")}
        placeholder={{ blurhash }}
        transition={1000}
      />
      <Text style={styles.title}>Digital Art Gallery</Text>
      <Text style={styles.desc}>
        Step into a world where imagination knows no bounds. [Gallery Name] is a
        haven for art lovers, showcasing a diverse collection of contemporary
        and classical artworks from emerging and established artists. Each piece
        tells a story, evoking emotions and inspiring creativity.
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    position: "relative",
    borderRadius: 14,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
    borderRadius: 14,
    objectFit: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 10,
    color: "white",
  },
  desc: {
    fontSize: 12,
    fontWeight: 200,
    fontStyle: "italic",
    lineHeight: 18,
    textAlign: "center",
    color: "white",
    width: "90%",
  },
});
