import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Trending Item component
const TrendingItem = ({ rank, category, title, description, tweetCount }) => {
  return (
    <TouchableOpacity style={styles.trendingItem}>
      <View style={styles.trendingContent}>
        <View style={styles.rankContainer}>
          <Text style={styles.rankText}>{rank}. </Text>
          {category && <Text style={styles.categoryText}>{category} · </Text>}
          <Text style={styles.trendingLabel}>Trending</Text>
        </View>

        <Text style={styles.trendingTitle}>{title}</Text>
        <Text style={styles.trendingDescription}>{description}</Text>

        <Text style={styles.tweetCount}>
          {typeof tweetCount === "number"
            ? `${tweetCount.toLocaleString()} Tweets`
            : tweetCount}
        </Text>
      </View>

      <View style={styles.chevronContainer}>
        <Icon name="chevron-down" size={20} color="#657786" />
      </View>
    </TouchableOpacity>
  );
};

export default function TrendingScreen() {
  // Sample trending data
  const trendingItems = [
    {
      id: 1,
      rank: 10,
      title: "Lorem Ipsum Headline",
      description: "Lorem ipsum dolor sit amet consectetur",
      tweetCount: 25500,
      category: "",
    },
    {
      id: 2,
      rank: 11,
      title: "#LoremIpsumTag",
      description: "",
      tweetCount: "9,235 people are Tweeting about this",
      category: "",
    },
    {
      id: 3,
      rank: 12,
      title: "#WednesdayThoughts",
      description: "",
      tweetCount: 30700,
      category: "",
    },
    {
      id: 4,
      rank: 13,
      title: "Consectetur Adipiscing",
      description: "",
      tweetCount: "4,301 people are Tweeting about this",
      category: "Sports",
    },
    {
      id: 5,
      rank: 14,
      title: "#BreakingUpdate",
      description: "",
      tweetCount: 51100,
      category: "Politics",
    },
    {
      id: 6,
      rank: 15,
      title: "#QuickQuestionIn4Words",
      description: "",
      tweetCount: "8,277 people are Tweeting about this",
      category: "",
    },
    {
      id: 7,
      rank: 16,
      title: "Nullam Porttitor",
      description: "Lorem ipsum dolor sit amet consectetur",
      tweetCount: 12800,
      category: "Science",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🔥 Trending Screen</Text>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search Twitter" />
        </View>
        <View style={styles.selectionBoxes}>
          <View style={styles.selectionBox}>
            <Text style={styles.selectionText}>For You</Text>
          </View>
          <View style={[styles.selectionBox, styles.selected]}>
            <Text style={[styles.selectionText, styles.selectedText]}>
              Trending
            </Text>
          </View>
          <View style={styles.selectionBox}>
            <Text style={styles.selectionText}>News</Text>
          </View>
          <View style={styles.selectionBox}>
            <Text style={styles.selectionText}>Sports</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.locationHeader}>
          <Text style={styles.locationText}>Canadian Trends</Text>
        </View>

        {/* Trending Items */}
        {trendingItems.map((item) => (
          <TrendingItem
            key={item.id}
            rank={item.rank}
            category={item.category}
            title={item.title}
            description={item.description}
            tweetCount={item.tweetCount}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollView: {
    width: "100%",
  },
  contentContainer: {
    paddingBottom: 70,
  },
  locationHeader: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  trendingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  trendingContent: {
    flex: 1,
  },
  rankContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankText: {
    color: "#657786",
    fontSize: 14,
  },
  categoryText: {
    color: "#657786",
    fontSize: 14,
  },
  trendingLabel: {
    color: "#657786",
    fontSize: 14,
  },
  trendingTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  trendingDescription: {
    fontSize: 14,
    color: "#14171A",
    marginBottom: 5,
  },
  tweetCount: {
    fontSize: 14,
    color: "#657786",
  },
  chevronContainer: {
    justifyContent: "center",
    paddingLeft: 10,
  },
  searchBar: {
    width: "80%",
    paddingHorizontal: 15,
    marginTop: 10,
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#F5F8FA",
    height: 40,
    width: "100%",
    textAlign: "center",
    borderRadius: 20,
    fontSize: 16,
  },
});
