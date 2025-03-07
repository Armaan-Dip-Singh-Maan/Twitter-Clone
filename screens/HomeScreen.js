import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// Post component to represent each tweet in the feed
const Post = ({ user, content, time, comments, retweets, likes, hasImage, imageUrl }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image 
          source={{ uri: user.profilePic }} 
          style={styles.profilePic} 
        />
        <View style={styles.userInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userHandle}>{user.handle}</Text>
            <Text style={styles.postTime}>{time}</Text>
          </View>
          <Text style={styles.postContent}>{content}</Text>
        </View>
      </View>
      
      {hasImage && (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imageUrl }} 
            style={styles.postImage} 
            resizeMode="cover"
          />
        </View>
      )}
      
      <View style={styles.engagement}>
      {/* Message */}
      <TouchableOpacity style={styles.engagementItem}>
        <Icon name="comment-outline" size={22} color="#657786" />
        <Text style={styles.engagementText}>{comments}</Text>
      </TouchableOpacity>

      {/* Retweet */}
      <TouchableOpacity style={styles.engagementItem}>
        <Icon name="repeat" size={22} color="#657786" />
        <Text style={styles.engagementText}>{retweets}</Text>
      </TouchableOpacity>

      {/* Like (Heart) */}
      <TouchableOpacity style={styles.engagementItem}>
        <Icon name="heart-outline" size={22} color="#657786" />
        <Text style={styles.engagementText}>{likes}</Text>
      </TouchableOpacity>

      {/* Share */}
      <TouchableOpacity style={styles.engagementItem}>
        <Icon name="share-outline" size={22} color="#657786" />
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default function HomeScreen() {
  // Sample data for posts
  const posts = [
    {
      id: 1,
      user: {
        name: "Andrea",
        handle: "@andy_landerson",
        profilePic: "https://picsum.photos/id/64/200",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ex nulla. Pellentesque eu tortor a odio sagittis placerat. Proin sit amet ornare ante.",
      time: "5m",
      comments: 15,
      retweets: 26,
      likes: 301,
      hasImage: false,
    },
    {
      id: 2,
      user: {
        name: "Bert",
        handle: "@rodrisurfer",
        profilePic: "https://picsum.photos/id/1025/200",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ex nulla. Pellentesque eu tortor a odio sagittis placerat. Proin sit amet ornare ante.",
      time: "1h",
      comments: 42,
      retweets: 87,
      likes: 554,
      hasImage: true,
      imageUrl: "https://picsum.photos/id/154/400/300",
    },
    {
      id: 3,
      user: {
        name: "Sophia Chen",
        handle: "@sophiathinks",
        profilePic: "https://picsum.photos/id/65/200",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris convallis feugiat metus eu varius.",
      time: "2h",
      comments: 5,
      retweets: 12,
      likes: 78,
      hasImage: false,
    },
    {
      id: 4,
      user: {
        name: "Marco Davis",
        handle: "@marcod",
        profilePic: "https://picsum.photos/id/91/200",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
      time: "3h",
      comments: 23,
      retweets: 7,
      likes: 122,
      hasImage: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🏠 Home Screen</Text>
      </View>
      
      {/* Main Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {posts.map(post => (
          <Post
            key={post.id}
            user={post.user}
            content={post.content}
            time={post.time}
            comments={post.comments}
            retweets={post.retweets}
            likes={post.likes}
            hasImage={post.hasImage}
            imageUrl={post.imageUrl}
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
    paddingVertical: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    width: "100%",
  },
  contentContainer: {
    paddingBottom: 70,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  postHeader: {
    flexDirection: "row",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  userName: {
    fontWeight: "bold",
    marginRight: 5,
  },
  userHandle: {
    color: "#657786",
    marginRight: 5,
  },
  postTime: {
    color: "#657786",
  },
  postContent: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  imageContainer: {
    marginVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  engagement: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingRight: 20,
  },
  engagementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  engagementText: {
    marginLeft: 5,
    color: "#657786",
    fontSize: 14,
  },
});