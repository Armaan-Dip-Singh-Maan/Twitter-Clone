import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

export default function TrendingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🔥 Trending Screen</Text>
      </View>
      {/* Main Content */}
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 20,
    paddingTop: 40,
    backgroundColor: "#f0f0f0",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
