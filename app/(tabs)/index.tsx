import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {tweets} from "@/data/mock";
import {Tweet} from "@/components/Tweet";
import icons from "@/constants/Images";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ height: 44 }}></View>
      <ScrollView>
        <View style={{
          height: 45,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderBottomColor: '#BDC5CD',
          borderBottomWidth: 1,
        }}>
          <Image source={require('@/assets/avata/0.png')} style={{
            height: 32,
            width: 32,
            borderRadius: 32
          }}/>
          <Image source={icons.logo} style={{ width: 27, resizeMode: 'contain' }}/>
          <Image source={icons.spark} style={{ width: 22.64, resizeMode: 'contain' }}/>
        </View>
        {tweets.map((tweet, n) => (
          <Tweet key={tweet.id} tweet={tweet}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
