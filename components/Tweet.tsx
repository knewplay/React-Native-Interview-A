import {Image, Pressable, Text, View} from 'react-native';
import {useRouter, useSegments} from "expo-router";
import TextWithImage from "@/components/TextWithImage";
import {TweetData} from "@/data/tweet";
import icons from "@/constants/Images";

type Group<T extends string> = `(${T})`;
type SharedSegment = Group<"index"> | Group<"search"> | Group<"profile">;

export function Tweet({ tweet }: { tweet: TweetData }) {
  const [segment] = useSegments() as [SharedSegment];
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
      }}
      style={{
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 9,
        borderBottomColor: '#CED5DC',
        borderBottomWidth: 0.2
      }}
    >

      <TextWithImage imageSource={icons.heart}
                     imageStyle={{ width: 12, resizeMode: 'contain', marginRight: 4 }}
                     text={tweet.info}
                     textStyle={{ color: '#687684', fontSize: 14, marginLeft: 9, fontWeight: '400' }
                     }
                     containerStyle={{ marginLeft: 42 }}
      />

      <View style={{ flexDirection: 'row' }}>
        <Image source={tweet.avatar} style={{ width: 55, height: 55, borderRadius: 55 }}/>
        <View style={{ marginLeft: 12, flexDirection: 'column', flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>{tweet.userName}</Text>
              <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 4, color: '#687684' }}>{tweet.user}</Text>
              <Text style={{ fontSize: 16, fontWeight: '400', color: '#687684' }}> ·{tweet.time}</Text>
            </View>
            <Image source={icons.down_arrow} style={{ width: 10, resizeMode: 'contain' }}/>
          </View>
          <Text style={{ marginTop: 3, flex: 1, color: '#141619', lineHeight: 20 }}>{tweet.message}</Text>

          <View
            style={{
              marginTop: 10,
              marginRight: 49,
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-between'
            }}>

            <TextWithImage imageSource={icons.comment}
                           imageStyle={{ width: 15, resizeMode: 'contain', marginRight: 4 }}
                           text={tweet.comments.toString()}
                           textStyle={{ fontSize: 12, color: '#687684' }}
            />
            <TextWithImage imageSource={icons.retweet}
                           imageStyle={{ width: 15, resizeMode: 'contain', marginRight: 4 }}
                           text={tweet.comments.toString()}
                           textStyle={{ fontSize: 12, color: '#687684' }}
            />

            <TextWithImage imageSource={icons.like}
                           imageStyle={{ width: 15, resizeMode: 'contain', marginRight: 4 }}
                           text={tweet.likes.toString()}
                           textStyle={{ fontSize: 12, color: '#687684' }}
            />
            <Image source={icons.share} style={{ width: 15, resizeMode: 'contain' }}/>
          </View>

        </View>
      </View>

    </Pressable>
  )
}
