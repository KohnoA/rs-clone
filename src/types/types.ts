import { ModalContent } from '../constants/constants';

export interface IRecipesData {
    recipe: {
          uri: string;
          label: string;
          image: string;
          dishType: string;
          calories: string;
          source: string
          cuisineType: string;
    }
}

export interface IRecupesSearch {
    hits: IRecipesData[];
}

export interface IRecipes {
    url: string;
}

export interface IRecipeInfo {
    id?: string;
    dishType?: string;
    label?: string;
    image?: string;
    header?: string[];
    cuisineType?: string[];
    calories?: number;
    dietLabels?: string[]
    healthLabels?: string[]
    totalTime?:number;
    totalWeight?: number;
    mealType?: string[];
    ingredientLines?: string[];
    ingredients?: [{
        quantity: number;
        measure: string;
        food: string;
        weight: number;
        foodCategory: string;
        image: string;
    }],
    digest?: [{
        label: string,
        total: number,
        unit: string,
    }]
}

export interface IRecipeInfoItem {
    response: IRecipeInfo;
    header: string;
    value: string;
    section: string;
}

export interface IRecipeFavorite {
    cuisineType?: string;
    image?: string;
    dishType?: string;
    calories?: number;
    label?: string;
    uri?: string;
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

export interface IRecipeCard {
    route?: string;
    id?: string;
    header?: string;
    title?: string;
    image?: string;
    type?: string;
    typeIcon?: string;
    kcalIcon?: string;
    kcal?: number;
}


export interface IUseInput {
  value: string,
  isValid: boolean,
  isDirty: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: () => void,
  clear: () => void
}

export interface IModalContext {
  isOpen: boolean,
  content: ModalContent | null,
}

export interface IUserState {
  email: string | null,
  token: string | null,
  id: string | null,
  name: string | null,
}
export interface ILifeChange {
  fats: number,
  carbohydrates: number,
  rolls: number,
}
export interface INutritionFactsData {
  calories: number,
  totalNutrients: ITotalNutrients,
  totalDaily: ITotalNutrients,
  ingredients: [
    {
      parsed: [IIngredients],
      text: string
    }
  ]
}

export type ITotalNutrientsKey = 'FAT' | 'FASAT' | 'CHOLE' | 'NA' | 'CHOCDF' | 'FIBTG' | 'SUGAR' | 'PROCNT' |
  'VITD' | 'CA' | 'FE' | 'K' | 'FATRN' | 'ENERC_KCAL';

export type ITotalNutrients = Record<ITotalNutrientsKey, ITotalNutrientsItem>;

export interface ITotalNutrientsItem {
  label: string,
  quantity: number,
  unit: string
}

export interface IIngredients {
  quantity: number,
  measure: string,
  food: string,
  weight: number,
  nutrients: ITotalNutrients
}
