import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#000",
          showLabel: false,
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
              <View style={styles.bottomTabItem}>
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={26}
                />
                <Text style={styles.bottomTabItemText}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.bottomTabItem}>
                <Ionicons name="ios-search" color={color} size={26} />
                <Text style={styles.bottomTabItemText}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.bottomTabAddItem}>
                <MaterialCommunityIcons name="plus" color="#000" size={18} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.bottomTabItem}>
                <MaterialCommunityIcons
                  name="message-outline"
                  color={color}
                  size={26}
                />
                <Text style={styles.bottomTabItemText}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.bottomTabItem}>
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={26}
                />
                <Text style={styles.bottomTabItemText}>Home</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabItem: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomTabItemText: {
    color: "#fff",
    fontSize: 10,
  },

  bottomTabAddItem: {
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
