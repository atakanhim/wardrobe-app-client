import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/contexts/authProvider";

const Settings = () => {
  const { onLogout } = useAuth();

  return (
    <View>
      <Text>Settings</Text>
      <Pressable
        onPress={async () => {
          console.log("asd");
          var s = await onLogout!();
        }}
      >
        <Text> buton bas </Text>
      </Pressable>
    </View>
  );
};

export default Settings;
