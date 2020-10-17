import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import { Fontisto } from "@expo/vector-icons";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { Video } from "expo-av";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home = () => {
  const videos = [
    require("../assets/videos/video1.mp4"),
    require("../assets/videos/video2.mp4"),
    require("../assets/videos/video3.mp4"),
    require("../assets/videos/video4.mp4"),
    require("../assets/videos/video5.mp4"),
    require("../assets/videos/video6.mp4"),
  ];

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height - 78;

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
        snapToInterval={height}
        width={width}
        decelerationRate={"fast"}
        pagingEnabled
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#000",
              height: height,
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Video
              source={item}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              playInBackground={false}
              shouldPlay
              isLooping
              style={{
                height: height,
                width: width,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <View
                style={{
                  flex: 1,
                  zIndex: 1,
                  paddingVertical: 18,
                  paddingHorizontal: 16,
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}
                >
                  @akinncar
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 14, paddingVertical: 12 }}
                >
                  When you call your friend to have fun in a cool weekend, and
                  togheter your make funny things with more friends.
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Fontisto
                    name="music-note"
                    size={14}
                    color="white"
                    style={{ paddingRight: 6 }}
                  />
                  <Text style={{ color: "#fff", fontSize: 14 }}>
                    @ushermusic Original Song
                  </Text>
                </View>
              </View>
            </Video>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
