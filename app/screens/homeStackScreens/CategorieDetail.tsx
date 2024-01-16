import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { CategorieDetailParams, HomeStackParamList, SubCategory } from '../../../constants/types';
type CategorieDetailRouteProp = RouteProp<HomeStackParamList, 'CategorieDetails'>;
type Props = {
    route: CategorieDetailRouteProp;

};
const CategorieDetail: React.FC<Props> = ({ route }) => {
    const { categoryAlt, categoryName } = route.params;
    const navigation = useNavigation();
    useEffect(() => {
        // Örneğin, ilk alt kategoriyi başlık olarak kullanma
        if(categoryAlt && categoryAlt.length > 0) {
            navigation.setOptions({
                title: categoryName
            });
        }
    }, [categoryAlt, categoryName, navigation]);
    console.log(categoryAlt.map(() => ({

    })));
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
