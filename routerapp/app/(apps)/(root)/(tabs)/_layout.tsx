import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "@/components/CustomHeader";

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconname: any;

          if (route.name === "index") {
            iconname = focused ? "wardrobe" : "wardrobe-outline";
          } else if (route.name === "settings") {
            iconname = focused ? "settings" : "settings-outline";
          } else if (route.name === "myCombinations") {
            iconname = focused ? "home" : "home-outline";
          }
          return route.name === "index" ? (
            <MaterialCommunityIcons name={iconname} size={size} color={color} />
          ) : (
            <Ionicons name={iconname} size={size} color={color} />
          );
        },
        tabBarLabel: "",
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      })}
    >
      <Tabs.Screen
        name="myCombinations"
        options={{
          headerTitle: "My Outfits",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "settings",
        }}
      />
    </Tabs>
  );
};

export default Layout;
