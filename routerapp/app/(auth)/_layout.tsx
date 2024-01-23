import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Slot, Stack, useNavigation, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthProvider, useAuth } from "@/app/contexts/authProvider";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { authState } = useAuth();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (authState?.authenticated === false) {
        while (router.canGoBack()) {
          // Pop from stack until one element is left
          router.back();
        }
        return router.replace("/(auth)/(modals)/login");
      } else if (authState?.authenticated) {
        return router.replace("/(auth)/(tabs)/");
      }
    })();
  }, [authState?.authenticated]);
  // This layout can be deferred because it's not the root layout.

  return (
    <Stack>
      <Stack.Screen
        name="(modals)/login"
        options={{
          presentation: "modal",
          title: "Log in or sign up",
        }}
      />
      <Stack.Screen
        name="(modals)/createUser"
        options={{
          presentation: "modal",
          title: "create",
        }}
      />
      <Stack.Screen
        name="(modals)/profile"
        options={{
          presentation: "modal",
          title: "Log in or sign up",

          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
