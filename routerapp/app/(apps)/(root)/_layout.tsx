import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/profile"
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          presentation: "modal",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="(modals)/categories"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
