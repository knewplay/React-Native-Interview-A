import {Image, Text, TextInput, View} from "react-native";
import icons from "@/constants/Images";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

type HeaderProps = {
  title?: string;
  bottomChild?: React.ReactElement;
};

export default function Header({ title, bottomChild }: HeaderProps) {
  return (
    <View style={{
      borderBottomColor: '#BDC5CD',
      borderBottomWidth: 0.5,
    }}>
      <View style={{
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
        <Image source={require('@/assets/avatar/0.png')} style={{
          height: 32,
          width: 32,
          borderRadius: 32
        }}/>
        {title ? <Text style={{ fontSize: 17, fontWeight: '800', color: '#141619' }}>{title}</Text> :
          <Image source={icons.logo} style={{ width: 27, resizeMode: 'contain' }}/>}
        <Image source={icons.spark} style={{ width: 22.64, resizeMode: 'contain' }}/>
      </View>
      {bottomChild}
    </View>
  )
}
