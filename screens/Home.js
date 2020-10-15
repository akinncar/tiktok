import React from "react";
import { View, FlatList, Dimensions } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { Video } from "expo-av";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = () => {
  const videos = [
    "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AnimatedFlatList
        data={videos}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => (
          <Video
            source={{
              uri: item,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          />
        )}
      />
    </View>
  );
};

export default Home;
