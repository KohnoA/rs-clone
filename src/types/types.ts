export interface IRecipesData {
    recipe: {
          label: string;
          image: string;
          dishType: string;
          calories: string;
          source: string
          cuisineType: string;
    }
}

export interface IRecipes {
    url: string;
}

export interface IRecipeInfo {
    label: string;
    image: string;
    cuisineType: string;
    calories: number;
    totalWeight: number;
    mealType: string;
    ingredientLines: string[];
    ingredients: [{
        text: string;
        quantity: number;
        measure: string;
        food: string;
        weight: number;
        foodCategory: string;
        image: string;
    }],
    totalNutrients?: {
        ENERC_KCAL: {
            label: string;
            quantity: number;
            unit: string;
        },
        FAT: {
            label: string;
            quantity: number;
            unit: string;
        },
        CHOCDF: {
            label: string;
            quantity: number;
            unit: string;
        },
        SUGAR: {
            label: string;
            quantity: number;
            unit: string;
        },
        CHOLE: {
            label: string;
            quantity: number;
            unit: string;
        },
        PROCNT: {
            label: string;
            quantity: number;
            unit: string;
        }

    }
}

export interface IFilters {
    id: number;
    query: string;
    header: string;
    items: {
        item1: string;
        item2: string;
        item3: string;
        item4: string;
        item5: string;
        item6?: string;
    }
}