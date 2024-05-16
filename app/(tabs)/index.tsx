import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {tweets} from "@/data/mock";
import {Tweet, TweetData} from "@/components/Tweet";
import Header from "@/components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={tweets}
        renderItem={({ item }: { item: TweetData }) => <Tweet item={item}/>}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
})
