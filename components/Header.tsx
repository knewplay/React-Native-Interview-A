import {Image, StyleSheet, Text, View} from "react-native";
import icons from "@/constants/Images";
import React from "react";
import {Link} from "expo-router";
import {Image as ExpoImage} from "expo-image";

type HeaderProps = {
  title?: string;
  bottomChild?: React.ReactElement;
};

export default function Header({ title, bottomChild }: HeaderProps) {
  return (
    <View style={styles.container
    }>
      <View style={styles.top}>
        <Link href='(tabs)/user/0'>
          <ExpoImage source={require('@/assets/avatar/0.png')} style={styles.avatar}/>
        </Link>
        {title ? <Text style={styles.title}>{title}</Text> :
          <Image source={icons.logo} style={styles.logo}/>}
        <Image source={icons.spark} style={styles.rightIcon}/>
      </View>
      {bottomChild}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#BDC5CD',
    borderBottomWidth: 0.5,
  },
  top: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 32
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#141619'
  },
  logo: {
    width: 27,
    resizeMode: 'contain'
  },
  rightIcon: {
    width: 22.64,
    resizeMode: 'contain'
  }
});
