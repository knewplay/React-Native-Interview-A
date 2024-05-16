import {ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import TextWithImage from "@/components/TextWithImage";
import icons from "@/constants/Images";
import {Link} from "expo-router";
import {Image} from 'expo-image';

export interface TweetData {
  id: number;
  type: string;
  info: string;
  userName: string;
  user: string;
  time: string;
  avatar: ImageSourcePropType;
  message: string;
  comments: number;
  retweets: number;
  likes: number;
  isVerified?: boolean;
}


export function Tweet({ item }: { item: TweetData }) {
  return (
    <TouchableHighlight
      onPress={() => console.log('Pressed!')}
      underlayColor="#F3F9FE"
      style={styles.container}
    >
      <View>
        {/*tweet info*/}
        <TextWithImage imageSource={icons.heart}
                       imageStyle={styles.infoImgStyle}
                       text={item.info}
                       textStyle={styles.tweetInfo}
                       containerStyle={{ marginLeft: 42 }}
        />

        {/*tweet content*/}
        <View style={styles.tweetContainer}>

          {/*avatar*/}
          <Link href={`(tabs)/user/${item.user}`}>
            <Image source={item.avatar} style={styles.avatar}/>
          </Link>

          {/*tweet*/}
          <View style={styles.tweetContent}>
            <TweetHeader item={item}/>
            <Text style={styles.tweetMessage}>{item.message}</Text>
            <TweetActions item={item}/>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const TweetHeader = ({ item }: { item: TweetData }) => {
  return (
    <View style={styles.tweetHeader}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.userName}</Text>
        <Text style={styles.user}>{item.user}</Text>
        <Text style={styles.time}> ·{item.time}</Text>
      </View>
      <Image source={icons.down_arrow} style={styles.downArrow}/>
    </View>
  );
};

const TweetActions = ({ item }: { item: TweetData }) => {
  return (
    <View style={styles.tweetActions}>
      <TextWithImage imageSource={icons.comment}
                     imageStyle={styles.imageStyle}
                     text={item.comments.toString()}
                     textStyle={styles.actionText}
      />
      <TextWithImage imageSource={icons.retweet}
                     imageStyle={styles.imageStyle}
                     text={item.comments.toString()}
                     textStyle={styles.actionText}
      />
      <TextWithImage imageSource={icons.like}
                     imageStyle={styles.imageStyle}
                     text={item.likes.toString()}
                     textStyle={styles.actionText}
      />
      <Image source={icons.share} style={styles.share}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderBottomColor: '#CED5DC',
    borderBottomWidth: 0.2
  },
  tweetContainer: {
    flexDirection: 'row'
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tweetInfo: {
    color: '#687684',
    fontSize: 14,
    marginLeft: 9,
    fontWeight: '400'
  },
  infoImgStyle: {
    width: 12,
    resizeMode: 'contain',
    marginRight: 4
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  userName: {
    fontSize: 16,
    fontWeight: '600'
  },
  user: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 4,
    color: '#687684'
  },
  time: {
    fontSize: 16,
    fontWeight: '400',
    color: '#687684'
  },
  tweetMessage: {
    marginTop: 3,
    flex: 1,
    color: '#141619',
    lineHeight: 20
  },
  tweetActions: {
    marginTop: 10,
    marginRight: 49,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  actionText: {
    fontSize: 12,
    color: '#687684'
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 55
  },
  downArrow: {
    width: 10,
    resizeMode: 'contain'
  },
  imageStyle: {
    width: 15,
    resizeMode: 'contain',
    marginRight: 4
  },
  share: {
    width: 15,
    resizeMode: 'contain'
  },
  tweetContent: {
    marginLeft: 12,
    flexDirection: 'column',
    flex: 1
  }
});
