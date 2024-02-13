import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';

import { CategorieDetailParams, HomeStackParamList, SubCategory } from '../../../constants/types';


const CategorieDetail = ({ route }) => {
    const { categoryAlt, categoryName }: { categoryAlt: SubCategory[], categoryName: string } = route.params;
    const navigation = useNavigation();
    useEffect(() => {
        // Örneğin, ilk alt kategoriyi başlık olarak kullanma
        if(categoryAlt && categoryAlt.length > 0) {
            navigation.setOptions({
                title: categoryName
            });
        }
    }, [categoryAlt, categoryName, navigation]);
    console.log("-------------------")
    categoryAlt.forEach((item, index) => {
        console.log("*********sss****************************")
        console.log(item.subCategoryAlt)
        console.log(item.subCategoryName)
        console.log(item.subCategoryColor)
        console.log(item.subCategoryId)
        console.log("*************************************")
    });
    console.log("-------------- -----")
    return (
        <SafeAreaView>
            {/* Burada categoryAlt içindeki veriyi kullanabilirsiniz */}
            {categoryAlt.map((subCategory: SubCategory) => (
                <Text key={subCategory.subCategoryId.toString()}>{subCategory.subCategoryName}</Text>
            ))}
        </SafeAreaView>
    )
}

export default CategorieDetail
