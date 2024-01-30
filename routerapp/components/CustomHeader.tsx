import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const CustomHeader = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}> Wardrobe </Text>

        <Pressable
          onPress={() => {
            console.log("adsa");
            router.navigate("/profile");
          }}
        >
          <Image
            source={require("@/assets/images/defaulavatar.png")}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    // Metin özelliklerini buraya ekleyin
    fontSize: 24,
    fontStyle: "italic",
    letterSpacing: 3,
    fontWeight: "300",
    textTransform: "uppercase",
  },
  container: {
    padding: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 999,
    borderColor: "gray",
    marginTop: 50,
  },
});

export default CustomHeader;