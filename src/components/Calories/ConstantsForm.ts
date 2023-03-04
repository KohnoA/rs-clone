import { IRecipe, ITotalNutrientsItem } from '../../models/IRecipes';
import { CountCalories, CountNutrients, ICountCalories } from './FormTypes';

const MALE = {
  value: 'male',
  text: 'male',
  name: 'gender',
};

const FEMALE = {
  value: 'female',
  text: 'female',
  name: 'gender',
};

const LOSS = {
  value: 'loss',
  text: 'lose weight',
  name: 'goal',
};

const GAIN = {
  value: 'gain',
  text: 'gain muscle mass',
  name: 'goal',
};

const KEEP = {
  value: 'keep',
  text: 'maintain weight',
  name: 'goal',
};

const AGE = {
  type: 'text',
  name: 'age',
  span: 'Age:',
};

const HEIGHT = {
  type: 'text',
  name: 'height',
  span: 'Height (cm):',
};

const WEIGHT = {
  type: 'text',
  name: 'weight',
  span: 'Weight (kg):',
};

export const initialStateRadio = {
  gender: '',
  goal: '',
};

export const initialStateText = {
  age: '',
  height: '',
  weight: '',
};

export const initialStateSelect = 0;

export const GENDERS = [MALE, FEMALE];
export const GOALS = [LOSS, GAIN, KEEP];
export const TEXTS = [AGE, HEIGHT, WEIGHT];

const MEN_CALORIES: CountCalories = (weight, height, age, KFA) => {
  const calories = ((66.47 + (13.75 * Number(weight)) + (5 * Number(height)) - (6.74 * Number(age))) * KFA);
  return Math.ceil(calories);
};

const WOMEN_CALORIES: CountCalories = (weight, height, age, KFA) => {
  const calories = ((665.1 + (9.6 * Number(weight)) + (1.85 * Number(height)) - (4.68 * Number(age))) * KFA);
  return Math.ceil(calories);
};

export const countCalories: ICountCalories = {
  male: MEN_CALORIES,
  female: WOMEN_CALORIES,
};

export const KFA = [1, 1.2, 1.375, 1.55, 1.725, 1.9];

export const SELECT_OPTIONS = [
  'Your lifestyle', 'Inactive lifestyle (little or no exercise)', 
  'Light activity (light exercise/sport 1-3 days per week)', 
  'Moderate activity (moderate exercise/sport 3-5 times per week)', 
  'Active (heavy exercise/sport 6-7 almost daily)', 
  'Increased activity (very hard exercise/sports and physical work)'
];

export const countNutrientsPercent: CountNutrients = (state: string) => {
  const GOALS = ['loss', 'gain', 'keep'];

  return state === GOALS[0] ? { fats: 0.30, carbohydrates: 0.35, rolls: 0.35 }
    : state === GOALS[1] ? { fats: 0.25, carbohydrates: 0.45, rolls: 0.30 }
    : { fats: 0.15, carbohydrates: 0.50, rolls: 0.35 }
}

export const MIL_TIPE = ['breakfast', 'dinner', 'lunch', 'snack'];
export const CURRENT_CALORIES = {
  breakfast: { mod: true, cal: 0.25 },
  dinner:  { mod: true, cal: 0.40 },
  lunch:  { mod: true, cal: 0.25 },
  snack:  { mod: false, cal: 0.10 },
}

export const getCurrentCaloriesOfMilType = (calories: number, type: string) => {
  type T = keyof typeof CURRENT_CALORIES;

  if (CURRENT_CALORIES[type as T].mod) {
    return `${Math.ceil(calories * (CURRENT_CALORIES[type as T].cal - 0.05))}-${Math.ceil(calories * CURRENT_CALORIES[type as T].cal)}`;
  }

  return `0-${Math.ceil(calories * CURRENT_CALORIES[type as T].cal)}`;
};

export const CALORIES_TO_NUTRIENTS = {
  fats: 9,
  rolls: 4,
  carbohydrates: 4,
}

export interface INutrients {
  Carbs: number,
  Energy: number,
  Fat: number,
  Protein: number,
}

export const amountCommonCalories = (recipes: IRecipe[]) => {
  const KCAL_AND_PFC = ['ENERC_KCAL', 'PROCNT', 'FAT', 'CHOCDF'];
  type C = keyof INutrients;

  return recipes.reduce((acc, recipe) => {
    KCAL_AND_PFC.forEach(nutrient => {
      const current = recipe.recipe.totalNutrients[nutrient as keyof ITotalNutrientsItem];
      acc[current.label as C] === undefined
        ? acc[current.label as C] = Math.ceil(current.quantity)
        : acc[current.label as C] = Math.ceil(current.quantity) + acc[current.label as C];
    });
    return acc;
  }, {} as INutrients);
}

export const PARAGRAPH_TEXT = 'Enter your age, gender, weight, height, and also select the degree of physical activity (how many times a week you do fitness), click calculate and the online calculator will calculate the daily calorie intake for you, taking into account weight loss and without it!';
