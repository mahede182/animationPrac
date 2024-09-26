import { Link } from "expo-router";
import { ScrollView } from "moti";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <Link style={styles.container} href="/Tabs">
        Tabs Animation
      </Link>
      <Link style={styles.container} href="/Counter">
        Counter
      </Link>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ddd",
    color: "#333",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
