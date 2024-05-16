import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';

interface MessageProps {
  item: MessageData;
}

export interface MessageData {
  id: number;
  avatar: ImageSourcePropType;
  name: string;
  username: string;
  date: string;
  message: string;
}

export default function Message({ item }: { item: MessageData }) {
  return (
    <TouchableHighlight
      onPress={() => console.log('Pressed!')}
      underlayColor="#F3F9FE"
    >
      <View style={styles.messageContainer}>
        <Image source={item.avatar} style={styles.profileImage}/>
        <View style={styles.messageContent}>
          <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}> {item.username}</Text>
            <Text style={styles.date}> {item.date}</Text>
          </View>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CED5DC',
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 55,
    marginLeft: 20,
    marginRight: 9,
    marginVertical: 12
  },
  messageContent: {
    flex: 1,
    marginTop: 9,
    marginBottom: 12,
    marginRight: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
  },
  username: {
    color: '#687684',
  },
  date: {
    color: '#687684',
    marginLeft: "auto",
  },
  messageText: {
    marginTop: 2,
    lineHeight: 19,
    color: '#687684',
  },
});
