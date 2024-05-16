import {Image, ImageSourcePropType} from "react-native";

export function TabBarIcon({ source, width }: { source: ImageSourcePropType, width?: number }) {
  return (
    <Image source={source}
           style={{ width: width ? width : 20, resizeMode: 'contain' }}
    />
  );
}
