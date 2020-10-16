import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#FFF",
          style: {
            backgroundColor: "#000",
            borderTopColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="More" component={Home} />
        <Tab.Screen
          name="Inbox"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="message" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
