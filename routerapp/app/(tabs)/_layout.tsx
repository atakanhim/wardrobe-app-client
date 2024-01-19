import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconname: any;

          if (route.name === "index") {
            iconname = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconname = focused ? "home" : "home-outline";
          } else if (route.name === "Discover") {
            iconname = focused ? "home" : "home-outline";
          }
          return (
            <MaterialCommunityIcons
              name={route.name as any}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default Layout;
