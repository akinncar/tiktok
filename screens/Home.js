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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <FlatList
        data={videos}
        keyExtractor={() => Math.random().toString()}
        snapToAlignment={"center"}
        snapToInterval={Dimensions.get("window").height + 10}
        decelerationRate={"fast"}
        pagingEnabled
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#000",
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height - 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Video
              source={{
                uri: item,
              }}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              playInBackground={false}
              shouldPlay
              isLooping
              style={{
                aspectRatio: 1,
                width: Dimensions.get("window").width,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Home;
