import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { SubCategory } from "@/constants/types";

const page = () => {
  const { categoryName, categoryAlt } = useGlobalSearchParams<{
    categoryName: string;
    categoryAlt: any;
  }>();
  useEffect(() => {
    console.log(categoryAlt as SubCategory);
  }, []);

  return (
    <View>
      <Stack.Screen options={{ headerTitle: categoryName }} />
      <Text>{categoryName}</Text>
      <Text></Text>
    </View>
  );
};

export default page;
