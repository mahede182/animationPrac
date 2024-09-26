import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { MotiView } from "moti";

export default function NotFoundScreen() {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "timing",
        duration: 500,
      }}
      style={[
        styles.container,
        {
          backgroundColor: "#f5f5f5",
          borderRadius: 16,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          paddingHorizontal: 30,
          paddingVertical: 40,
        },
      ]}
    >
      <Text style={[styles.title, { color: "#333", fontSize: 28 }]}>
        Oops, Page Not Found
      </Text>
      <Link
        href="/"
        style={[
          styles.link,
          {
            backgroundColor: "#007AFF",
            paddingVertical: 16,
            paddingHorizontal: 24,
            borderRadius: 12,
            fontSize: 18,
            fontWeight: "bold",
          },
        ]}
      >
        Go to Home
      </Link>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    color: "#fff",
  },
});
