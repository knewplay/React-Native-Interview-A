import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from "react-native-safe-area-context";
import {Tweet, TweetData} from "@/components/Tweet";
import {tweets} from "@/data/mock";

const User = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={() => {
        }}>
          <Ionicons name="chevron-back" size={24} color="white"/>
        </TouchableOpacity>
      </View>
      {profileHeader()}
      <FlatList
        nestedScrollEnabled={true}
        data={tweets}
        renderItem={({ item }: { item: TweetData }) => <Tweet item={item}/>}
        keyExtractor={(item) => item.id.toString()}
        scrollEventThrottle={16}
        ListHeaderComponent={tabs}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};

const profileHeader = () => (
  <View style={styles.profileHeader}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Image
          source={require('@/assets/avata/0.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Pixsellz</Text>
          <Text style={styles.profileUsername}>@pixsellz</Text>
        </View>
      </View>
      <Text style={styles.editProfileText}>Edit profile</Text>
    </View>

    <Text style={styles.profileBio}>
      Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations
    </Text>

    <View style={styles.profileStats}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Feather name="link" size={16} color='#687684'/>
        <Text style={styles.profileStatText}> pixsellz.io</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <Feather name="calendar" size={16} color="gray"/>
        <Text style={styles.profileStatText}>Joined September 2018</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.profileStats}>
      <Text style={styles.profileStatText}>
        <Text style={{ color: "#141619", fontWeight: '600' }}>217 </Text>
        Following</Text>
      <Text style={styles.profileStatText}>
        <Text style={{ color: "#141619", fontWeight: '600' }}>118 </Text>
        Followers</Text>
    </View>
  </View>

)

const tabs = () => (
  <View style={styles.tabsContainer}>
    <TouchableOpacity style={styles.tabActive}>
      <Text style={styles.tabTextActive}>Tweets</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>Tweets & replies</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>Media</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>Likes</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  profileHeader: {
    justifyContent: 'space-between',
    padding: 20,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginRight: 20,
  },
  profileName: {
    marginTop: 10,
    fontWeight: '800',
    fontSize: 22,
  },
  profileUsername: {
    color: '#687684',
    fontSize: 16,
  },
  editProfileText: {
    color: '#4C9EEB',
    fontWeight: 'bold',
    borderRadius: 18,
    borderWidth: 1,
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 10.5,
    paddingRight: 9.5,
    fontSize: 14,
    borderColor: '#4C9EEB',
  },
  profileBio: {
    marginTop: 15,
    fontSize: 16,
  },
  profileStats: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  profileStatText: {
    fontSize: 14,
    color: '#687684',
    marginRight: 13,
  },

  tabsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BEC5CD',
  },
  tabActive: {
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#1DA1F2',
  },
  tab: {
    alignItems: 'center',
    padding: 13,
  },
  tabTextActive: {
    fontWeight: 'bold',
    color: '#1DA1F2',
  },
  tabText: {
    color: '#687684',
    fontWeight: '600',
  },
  tweetContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  pinnedTweet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pinnedIcon: {
    marginRight: 5,
  },
  pinnedText: {
    color: 'gray',
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweetProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  tweetName: {
    fontWeight: 'bold',
  },
  tweetUsername: {
    color: 'gray',
  },
  tweetDropdownIcon: {
    marginLeft: 'auto',
  },
  tweetText: {
    marginTop: 10,
  },
  tweetImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
  },
  tweetVideoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  playButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    padding: 10,
  },
  videoViews: {
    color: 'white',
    marginTop: 5,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  tweetAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweetActionCount: {
    color: 'gray',
    marginLeft: 5,
  },
});

export default User;