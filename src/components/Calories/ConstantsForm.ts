import { ILifeChange } from '../../types/types';
import { CountCalories, CountNutrients, ICountCalories } from './FormTypes';

const MALE = {
  value: 'male',
  text: 'мужской',
  name: 'gender',
};

const FEMALE = {
  value: 'female',
  text: 'женский',
  name: 'gender',
};

const LOSS = {
  value: 'loss',
  text: 'сбросить вес',
  name: 'goal',
};

const GAIN = {
  value: 'gain',
  text: 'набрать мышечную массу',
  name: 'goal',
};

const KEEP = {
  value: 'keep',
  text: 'поддерживать вес',
  name: 'goal',
};

const AGE = {
  type: 'text',
  name: 'age',
  span: 'Возраст',
};

const HEIGHT = {
  type: 'text',
  name: 'height',
  span: 'Рост (см)',
};

const WEIGHT = {
  type: 'text',
  name: 'weight',
  span: 'Вес (кг)',
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

export const SELECT_OPTIONS = ['Ваш образ жизни', 'Малоактивный образ жизни (мало или совсем нет занятий спортом)', 'Легкая активность (несложные упражнения / спорт 1–3 дня в неделю)', 'Умеренная активность (умеренные упражнения / спорт 3-5 раз в неделю)', 'Активный (тяжелые упражнения / спорт 6-7 почти ежедневно)', 'Повышенная активность (очень тяжелые упражнения / спорт и физическая работа)'];

export const countNutrientsPercent: CountNutrients = (state: string) => {
  const GOALS = ['loss', 'gain', 'keep'];

  return state === GOALS[0] ? { fats: 30, carbohydrates: 35, rolls: 35 }
    : state === GOALS[1] ? { fats: 25, carbohydrates: 45, rolls: 30 }
    : { fats: 15, carbohydrates: 50, rolls: 35 }
}
