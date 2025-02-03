import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import GallerySection from "@/components/gallery-section";
import InfoCard from "@/components/info-card";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.navBar}>
        <Ionicons name="menu" size={28} color="#0D99FF" />
        <ThemedText style={styles.logo}>LOGO</ThemedText>
      </ThemedView>
      <ScrollView>
        <InfoCard />
        <GallerySection />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    rowGap: 10,
    padding: 10,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#033381",
    fontSize: 16,
    fontWeight: 700,
  },
});
