export interface IRecipes {
    from: number,
    to: number,
    count: number,
    links: {},
    hints: IRecipe[],
}

interface IRecipe {
    recipe: IRecipeData,
    links: {},
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
    totalNutrients: {},
    totalDaily: {},
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
