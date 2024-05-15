import {ImageSourcePropType} from "react-native";

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