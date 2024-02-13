// types.ts

export type HomeStackParamList = {
    Home: undefined;
    CategorieDetails:CategorieDetailParams; // Örneğin categoryName adında bir parametre
    // Diğer ekranlar için buraya parametre tanımlayabilirsiniz
  };
  export type CategorieDetailParams = {
    categoryName?:string;
    categoryAlt: SubCategory[];
  };
  // types.ts

  export type SubCategory = {
    subCategoryId: string;
    subCategoryName: string;
    subCategoryColor: string;
    subCategoryAlt: string[];
  };
  
  export type Category = {
    categoryId: string;
    categoryName: string;
    categoryBgColor: string;
    categoryTextColor: string;
    categoryAlt: SubCategory[];
  };
  
  