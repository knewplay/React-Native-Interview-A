import {TweetData} from "@/data/tweet";

export const tweets: TweetData[] = [
  {
    id: 1,
    type: "like",
    info: "Kieron Dotson and Zack John liked",
    userName: "Martha Craig",
    user: "@craig_love",
    time: "12h",
    avatar: require("../assets/avata/1.png"),
    message: "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
    comments: 28,
    retweets: 5,
    likes: 21
  },
  {
    id: 2,
    type: "like",
    info: "Zack John liked",
    userName: "Maximmilian",
    user: "@maxjacobson",
    time: "3h",
    avatar: require("../assets/avata/2.png"),
    message: "Y’all ready for this next post?",
    comments: 28,
    retweets: 5,
    likes: 21
  },
  {
    id: 3,
    type: "retweet",
    info: "Kieron Dotson Retweeted",
    userName: "Tabitha Potter",
    user: "@mis_potter",
    isVerified: true,
    time: "14h",
    avatar: require("../assets/avata/3.png"),
    message: `Kobe’s passing is really sticking w/ me in a way I didn’t expect.

He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident.

But the end can happen for anyone at any time, & I can’t help but think of anything else lately.`,
    comments: 28,
    retweets: 5,
    likes: 21
  },
  {
    id: 4,
    type: "like",
    info: "Zack John liked",
    userName: "karennne",
    user: "@karennne",
    time: "10h",
    avatar: require("../assets/avata/4.png"),
    message: "Y’all ready for this next post?",
    comments: 28,
    retweets: 5,
    likes: 21
  },
];
