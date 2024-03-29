import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../contexts/AuthContext';
import { View, Text, ViewProps, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import uuid from 'react-native-uuid';
import { CategorieDetailParams, Category, HomeStackParamList } from '../../../constants/types';


const HomeScreen: React.FC<any> = ({ navigation }) => {
  const generateCategoryId = () => {
    return uuid.v4();
  };
  const category: Category[] = [
    {
      categoryId: generateCategoryId() as string,
      categoryName: "Üst Giyim",
      categoryBgColor: "#556B2F",
      categoryTextColor: "#F5F5DC",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Kazak",
          subCategoryColor: "#4682b4",
          subCategoryAlt: ["Kapüşonlu", "Boat Neck", "V Yaka"]
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Gömlek",
          subCategoryColor: "#008080",
          subCategoryAlt: ["Polo Yaka", "Button-down", "Denim"]
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "T-shirt",
          subCategoryColor: "#ff4500",
          subCategoryAlt: ["Basic", "V Yaka", "Bisiklet Yaka"]
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Sweatshirt",
          subCategoryColor: "#d2691e",
          subCategoryAlt: ["Kapüşonlu", "Baskılı", "Crop"]
        },
        {

          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Ceket",
          subCategoryColor: "#2f4f4f",
          subCategoryAlt: ["Deri Ceket", "Jean Ceket", "Bomber"]
        },

      ]
    },
    {
      categoryId: generateCategoryId() as string,
      categoryName: "Alt Giyim",
      categoryBgColor: "#FFD700",
      categoryTextColor: "#000000",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Pantolon",
          subCategoryColor: "#ccc",
          subCategoryAlt: ["Skinny", "Straight", "Wide Leg"]
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Etek",
          subCategoryColor: "#eee",
          subCategoryAlt: ["Mini", "Midi", "Maksi"]
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Şort",
          subCategoryColor: "#a9a9a9",
          subCategoryAlt: ["Kısa", "Bermuda", "Uzun"]
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Ayakkabı",
          subCategoryColor: "#800080",
          subCategoryAlt: ["Spor Ayakkabı", "Topuklu", "Babet"]
        },

      ]
    },
    {
      categoryId: generateCategoryId() as string,
      categoryName: "Aksesuar",
      categoryBgColor: "#87CEEB",
      categoryTextColor: "#000080",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Şapka",
          subCategoryColor: "#800080",
          subCategoryAlt: []
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Gözlük",
          subCategoryColor: "#800080",
          subCategoryAlt: []
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Kolye",
          subCategoryColor: "#800080",
          subCategoryAlt: []
        },
      ]
    },
    {
      categoryId: generateCategoryId() as string,
      categoryName: "Elbise",
      categoryBgColor: "#FFC0CB",
      categoryTextColor: "#000000",
      categoryAlt: [
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Ofis Elbisesi",
          subCategoryColor: "#800080",
          subCategoryAlt: []
        },
        {
          subCategoryId: generateCategoryId() as string,
          subCategoryName: "Spor Elbise",
          subCategoryColor: "#800080",
          subCategoryAlt: []
        }
      ]
    }
  ];




  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* container  */}
      <ScrollView className="px-3">

        {
          category.map(({ categoryId, categoryName, categoryBgColor, categoryTextColor, categoryAlt }) => (
            <TouchableOpacity className='p-' key={categoryId.toString()} onPress={() => {
              // handle onpress
              console.log(categoryId + "-" + categoryName)
              navigation.navigate("CategorieDetails", { categoryName: categoryName, categoryAlt: categoryAlt })
            }}>
              <View style={{ backgroundColor: categoryBgColor }} className=' rounded-xl border justify-center px-5 h-28 mt-12 '  >
                <Text style={{ color: categoryTextColor }} className=' text-xl text-zinc-600 '>{categoryName}</Text>
              </View>
            </TouchableOpacity>
          ))
        }



      </ScrollView>

    </SafeAreaView>
  );

}


export default HomeScreen;
