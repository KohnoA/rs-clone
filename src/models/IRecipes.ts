export interface IRecipes {
    from: number,
    to: number,
    count: number,
    links: {
        next: {
            href: string;
            title: string;
        }
    },
    hints: IRecipe[],
}

interface IRecipe {
    recipe: IRecipeData,
    links: {
        self: {
            href: string;
            title: string;
        }
    },
}

interface IRecipeData {
    uri: string,
    label: string,
    image: string,
    images: IRecipeDataImages,
    source: string,
    url: string,
    yield: number,
    dietLabels: [],
    healthLabels: string[],
    cautions: string[],
    ingredientLines: string[],
    ingredients: Ingredients[],
    calories: number,
    totalWeight: number,
    totalTime: number,
    cuisineType: string[],
    mealType: string[],
    dishType: string[],
    totalNutrients: ITotalNutrientsItem,
    totalDaily: ITotalDailiItem,
    digest: [],

}

interface IRecipeDataImages {
    THUMBNAIL: IRecipeDataImage,
    SMALL: IRecipeDataImage,
    ReGULAR: IRecipeDataImage,
}

interface IRecipeDataImage {
    url: string,
    width: number,
    height: number,
}

interface Ingredients {
    text: string,
    quantity: number,
    measure: string,
    food: string,
    weight: number,
    foodCategory: string,
    foodId: string,
    image: string | null,
}

interface ITotalNutrientsDesc {
    label: string;
    quantity: number;
    unit: string;
}

interface ITotalNutrientsItem {
        ENERC_KCAL:ITotalNutrientsDesc;
        FAT:ITotalNutrientsDesc;
        FASAT:ITotalNutrientsDesc;
        FATRN:ITotalNutrientsDesc;
        FAMS:ITotalNutrientsDesc;
        FAPU:ITotalNutrientsDesc;
        CHOCDF:ITotalNutrientsDesc;
        CHOCDF_net:ITotalNutrientsDesc;
        FIBTG:ITotalNutrientsDesc;
        SUGAR:ITotalNutrientsDesc;
        SUGAR_added:ITotalNutrientsDesc;
        PROCNT:ITotalNutrientsDesc;
        CHOLE:ITotalNutrientsDesc;
        NA:ITotalNutrientsDesc;
        CA:ITotalNutrientsDesc;
        MG:ITotalNutrientsDesc;
        K:ITotalNutrientsDesc;
        FE:ITotalNutrientsDesc;
        ZN:ITotalNutrientsDesc;
        P:ITotalNutrientsDesc;
        VITA_RAE:ITotalNutrientsDesc;
        VITC:ITotalNutrientsDesc;
        THIA:ITotalNutrientsDesc;
        RIBF:ITotalNutrientsDesc;
        NIA:ITotalNutrientsDesc;
        VITB6A:ITotalNutrientsDesc;
        FOLDFE:ITotalNutrientsDesc;
        FOLFD:ITotalNutrientsDesc;
        FOLAC:ITotalNutrientsDesc;
        VITB12:ITotalNutrientsDesc;
        VITD:ITotalNutrientsDesc;
        TOCPHA:ITotalNutrientsDesc;
        VITK1:ITotalNutrientsDesc;
        Sugar_alcohol:ITotalNutrientsDesc;
        WATER:ITotalNutrientsDesc;
}

interface ITotalDailiItem {
        ENERC_KCAL:ITotalNutrientsDesc;
        FAT:ITotalNutrientsDesc;
        FASAT:ITotalNutrientsDesc;
        CHOCDF:ITotalNutrientsDesc;
        FIBTG:ITotalNutrientsDesc;
        PROCNT:ITotalNutrientsDesc;
        CHOLE:ITotalNutrientsDesc;
        NA:ITotalNutrientsDesc;
        CA:ITotalNutrientsDesc;
        MG:ITotalNutrientsDesc;
        K:ITotalNutrientsDesc;
        FE:ITotalNutrientsDesc;
        ZN:ITotalNutrientsDesc;
        P:ITotalNutrientsDesc;
        VITA_RAE:ITotalNutrientsDesc;
        VITC:ITotalNutrientsDesc;
        THIA:ITotalNutrientsDesc;
        RIBF:ITotalNutrientsDesc;
        NIA:ITotalNutrientsDesc;
        VITB6A:ITotalNutrientsDesc;
        FOLDFE:ITotalNutrientsDesc;
        VITB12:ITotalNutrientsDesc;
        VITD:ITotalNutrientsDesc;
        TOCPHA:ITotalNutrientsDesc;
        VITK1:ITotalNutrientsDesc;
}