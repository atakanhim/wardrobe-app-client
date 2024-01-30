import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { Stack, Tabs, useRouter, Redirect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "@/components/CustomHeader";
import { useAuth } from "@/contexts/authProvider";
export const unstable_settings = {
  initialRouteName: "(root)",
};
const Layout = () => {
  const router = useRouter();
  const { authState } = useAuth();
  useEffect(() => {
    const checkAuthentication = async () => {
      if (authState?.authenticated === false) {
        while (router.canGoBack()) {
          // Pop from stack until one element is left
          router.back();
        }
        console.log("giris yapilmamis");
        router.replace("/login");
      }
    };

    checkAuthentication().catch((e) => console.log(e));
  }, [authState?.authenticated, router]);

  return (
    <Stack>
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="login" />
      <Stack.Screen name="createUser" />
    </Stack>
  );
};

export default Layout;
