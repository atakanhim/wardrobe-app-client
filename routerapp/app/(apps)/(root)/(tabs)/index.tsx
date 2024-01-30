import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from "react";
import uuid from "react-native-uuid";
import { router } from "expo-router";
import { Category } from "@/constants/types";

const index = () => {
  const generateCategoryId = () => {
    return uuid.v4();
  };
  const category = [
    {
      categoryId: generateCategoryId(),
      categoryName: "Üst Giyim",
      categoryBgColor: "#556B2F",
      categoryTextColor: "#F5F5DC",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Kazak",
          subCategoryColor: "#4682b4",
          subCategoryAlt: ["Kapüşonlu", "Boat Neck", "V Yaka"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Gömlek",
          subCategoryColor: "#008080",
          subCategoryAlt: ["Polo Yaka", "Button-down", "Denim"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "T-shirt",
          subCategoryColor: "#ff4500",
          subCategoryAlt: ["Basic", "V Yaka", "Bisiklet Yaka"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Sweatshirt",
          subCategoryColor: "#d2691e",
          subCategoryAlt: ["Kapüşonlu", "Baskılı", "Crop"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Ceket",
          subCategoryColor: "#2f4f4f",
          subCategoryAlt: ["Deri Ceket", "Jean Ceket", "Bomber"],
        },
      ],
    },
    {
      categoryId: generateCategoryId(),
      categoryName: "Alt Giyim",
      categoryBgColor: "#FFD700",
      categoryTextColor: "#000000",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Pantolon",
          subCategoryColor: "#ccc",
          subCategoryAlt: ["Skinny", "Straight", "Wide Leg"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Etek",
          subCategoryColor: "#eee",
          subCategoryAlt: ["Mini", "Midi", "Maksi"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Şort",
          subCategoryColor: "#a9a9a9",
          subCategoryAlt: ["Kısa", "Bermuda", "Uzun"],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Ayakkabı",
          subCategoryColor: "#800080",
          subCategoryAlt: ["Spor Ayakkabı", "Topuklu", "Babet"],
        },
      ],
    },
    {
      categoryId: generateCategoryId(),
      categoryName: "Aksesuar",
      categoryBgColor: "#87CEEB",
      categoryTextColor: "#000080",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Şapka",
          subCategoryColor: "#800080",
          subCategoryAlt: [],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Gözlük",
          subCategoryColor: "#800080",
          subCategoryAlt: [],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Kolye",
          subCategoryColor: "#800080",
          subCategoryAlt: [],
        },
      ],
    },
    {
      categoryId: generateCategoryId(),
      categoryName: "Elbise",
      categoryBgColor: "#FFC0CB",
      categoryTextColor: "#000000",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Ofis Elbisesi",
          subCategoryColor: "#800080",
          subCategoryAlt: [],
        },
        {
          subCategoryId: generateCategoryId(),
          subCategoryName: "Spor Elbise",
          subCategoryColor: "#800080",
          subCategoryAlt: [],
        },
      ],
    },
  ];
  return (
    <SafeAreaView className="flex p-5">
      <ScrollView>
        {category.map(
          ({
            categoryId,
            categoryName,
            categoryBgColor,
            categoryTextColor,
            categoryAlt,
          }) => (
            <Pressable
              className="p-1"
              key={categoryId.toString()}
              onPress={() => {
                // handle onpress
                console.log(categoryId + "-" + categoryName);

                router.push(
                  `/categories/${categoryName}?categoryAlt=${categoryAlt}`
                );
              }}
            >
              <View
                style={{ backgroundColor: categoryBgColor }}
                className=" rounded-xl border justify-center px-5 h-28 mt-12 "
              >
                <Text
                  style={{ color: categoryTextColor }}
                  className=" text-xl text-zinc-600 "
                >
                  {categoryName}
                </Text>
              </View>
            </Pressable>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
