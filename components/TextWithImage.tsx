import React from 'react';
import {Image, ImageSourcePropType, ImageStyle, Text, TextStyle, View, ViewStyle} from 'react-native';

interface TextWithImage {
  imageSource: ImageSourcePropType;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
  text: string;
  containerStyle?: ViewStyle;
}

const TextWithImage = ({ imageSource, imageStyle, textStyle, text, containerStyle }: TextWithImage) => {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, containerStyle]}>
      <Image source={imageSource} style={imageStyle}/>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default TextWithImage;