import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// ProfileTweet component for displaying tweets on the profile
const ProfileTweet = ({ content, time, comments, retweets, likes, hasImage, imageUrl }) => {
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetHeader}>
        <View style={styles.tweetUserInfo}>
          <View style={styles.userDetails}>
            <View style={styles.nameVerifiedContainer}>
              <Text style={styles.profileName}>UX Design Studio</Text>
              <Icon name="check-decagram" size={16} color="#1DA1F2" style={styles.verifiedBadge} />
            </View>
            <Text style={styles.userHandle}>@uxdesignstudio · {time}</Text>
          </View>
          <TouchableOpacity>
            <Icon name="chevron-down" size={20} color="#657786" />
          </TouchableOpacity>
        </View>
        <Text style={styles.tweetContent}>{content}</Text>
      </View>
      
      {hasImage && (
        <View style={styles.tweetImageContainer}>
          <Image 
            source={{ uri: imageUrl }} 
            style={styles.tweetImage} 
            resizeMode="cover"
          />
        </View>
      )}
      
      <View style={styles.engagement}>
        {/* Comment */}
        <TouchableOpacity style={styles.engagementItem}>
          <Icon name="comment-outline" size={22} color="#657786" />
          <Text style={styles.engagementText}>{comments}</Text>
        </TouchableOpacity>

        {/* Retweet */}
        <TouchableOpacity style={styles.engagementItem}>
          <Icon name="repeat" size={22} color="#657786" />
          <Text style={styles.engagementText}>{retweets}</Text>
        </TouchableOpacity>

        {/* Like */}
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

export default function ProfileScreen() {
  // Sample tweets data
  const tweets = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor ipsum et eros cursus rhoncus. #LoremIpsum #Design",
      time: "1d",
      comments: 5,
      retweets: 12,
      likes: 42,
      hasImage: true,
      imageUrl: "https://picsum.photos/id/25/400/250"
    },
    {
      id: 2,
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec euismod, nisl eget aliquam ultricies.",
      time: "2d",
      comments: 3,
      retweets: 8,
      likes: 35,
      hasImage: false
    },
    {
      id: 3,
      content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. #UXDesign #Process",
      time: "3d",
      comments: 7,
      retweets: 15,
      likes: 63,
      hasImage: false
    }
  ];

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
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {/* Profile Information */}
        <View style={styles.profileInfoContainer}>
          {/* Profile Image and Action Buttons Row */}
          <View style={styles.profileHeaderRow}>
            {/* Profile Image */}
            <View style={styles.profileImageContainer}>
              <Image 
                source={{ uri: "https://picsum.photos/id/1005/200" }}
                style={styles.profileImage}
              />
            </View>
            
            {/* Twitter Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="email-outline" size={22} color="#1DA1F2" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="bell-outline" size={22} color="#1DA1F2" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Following</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Profile Details */}
          <View style={styles.profileDetails}>
            <View style={styles.nameContainer}>
              <Text style={styles.profileName}>UX Design Studio</Text>
              <Icon name="check-decagram" size={16} color="#1DA1F2" style={styles.verifiedBadge} />
            </View>
            
            <Text style={styles.userHandle}>@uxdesignstudio</Text>
            
            <Text style={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor volutpat est, consectetur adipiscing.
            </Text>
            
            <View style={styles.locationWebsiteContainer}>
              <View style={styles.infoItem}>
                <Icon name="map-marker-outline" size={16} color="#657786" />
                <Text style={styles.infoText}>Lorem Ipsum, CA</Text>
              </View>
              
              <View style={styles.infoItem}>
                <Icon name="link-variant" size={16} color="#657786" />
                <Text style={[styles.infoText, styles.websiteLink]}>loremipsum.com</Text>
              </View>
            </View>
            
            <View style={styles.dateContainer}>
              <Icon name="calendar-month-outline" size={16} color="#657786" />
              <Text style={styles.infoText}>Joined May 2020</Text>
            </View>
            
            <View style={styles.statsContainer}>
              <TouchableOpacity style={styles.stat}>
                <Text style={styles.statNumber}>500</Text>
                <Text style={styles.statLabel}>Following</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.stat}>
                <Text style={styles.statNumber}>10,000</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Tweets Section */}
        <View style={styles.tweetsSection}>
          {tweets.map(tweet => (
            <ProfileTweet
              key={tweet.id}
              content={tweet.content}
              time={tweet.time}
              comments={tweet.comments}
              retweets={tweet.retweets}
              likes={tweet.likes}
              hasImage={tweet.hasImage}
              imageUrl={tweet.imageUrl}
            />
          ))}
        </View>
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
  profileInfoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E1E8ED",
  },
  profileHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#fff",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  followButton: {
    backgroundColor: "#1DA1F2",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
  followButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profileDetails: {
    padding: 15,
    paddingTop: 0,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  verifiedBadge: {
    marginLeft: 4,
  },
  userHandle: {
    fontSize: 15,
    color: "#657786",
    marginBottom: 10,
  },
  bio: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 10,
  },
  locationWebsiteContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#657786",
    marginLeft: 4,
  },
  websiteLink: {
    color: "#1DA1F2",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  stat: {
    flexDirection: "row",
    marginRight: 20,
  },
  statNumber: {
    fontWeight: "bold",
    marginRight: 4,
  },
  statLabel: {
    color: "#657786",
  },
  tweetsSection: {
    marginTop: 5,
  },
  tweetContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E1E8ED",
    padding: 15,
  },
  tweetHeader: {
    marginBottom: 10,
  },
  tweetUserInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  userDetails: {
    flex: 1,
  },
  nameVerifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tweetContent: {
    fontSize: 15,
    lineHeight: 20,
  },
  tweetImageContainer: {
    marginVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  tweetImage: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E1E8ED",
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