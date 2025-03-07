import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>👤 Profile Screen</Text>
        {/* Picture, name, desc, and selection boxes with selected having blue text and border bottom */}
        <View style={styles.selectionBoxes}>
          <View style={[styles.selectionBox, styles.selected]}>
            <Text style={[styles.selectionText, styles.selectedText]}>
              Tweets
            </Text>
          </View>
          <View style={styles.selectionBox}>
            {/* Renamed "Tweets & replies" to "Replies" so it looks better on thinner screens */}
            <Text style={styles.selectionText}>Replies</Text>
          </View>
          <View style={styles.selectionBox}>
            <Text style={styles.selectionText}>Media</Text>
          </View>
          <View style={styles.selectionBox}>
            <Text style={styles.selectionText}>Likes</Text>
          </View>
        </View>
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
    paddingTop: 40,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  selectionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#787878",
    paddingBottom: 10,
  },
  selectedText: {
    color: "#007AFF",
  },
  selectionBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 10,
    marginTop: 10,
  },
  selectionBox: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  selected: {
    borderBottomColor: "#007AFF",
  },
});
