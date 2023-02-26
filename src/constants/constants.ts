import { IMainAppInfo } from '../types/types';

export const GITHUB_ACCOUNTS = ['https://github.com/KohnoA', 'https://github.com/Nexuslolz', 'https://github.com/shamkolovich95'];
export const EMAIL_REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 15;
export const MIN_NAME_LENGTH = 3;
export const MAX_NAME_LENGTH = 16;
export const NUTRITION_ANALYSIS_APP_ID = 'c1373a30';
export const NUTRITION_ANALYSIS_APP_KEY = 'df20c251f90c957e7829cc43301294f5';
export const NUTRITION_ANALYSIS_BASE_REQUEST = 'https://api.edamam.com/api/nutrition-details';

export const enum Validations {
  email = 'email',
  password = 'password',
  name = 'name'
}

export const enum ModalContent {
  signIn = 'Sign In',
  signUp = 'Sign Up'
}

export const enum AuthErrorsMessage {
  invalidFields = 'Invalid form fields',
  notFound = 'Incorrect login or password!',
  isExist = 'User with this email is already registered'
}

export const enum CalculatorErrorMessage {
  empty = 'Please fill in the field!',
  requestError = 'Processing error, please check your data or try again later',
  none = ''
}

export const MAIN_APP_INFO: IMainAppInfo[] = [
  {
    title: 'Recipes',
    subTitle: '',
    description: '',
    link: '/',
  },
  {
    title: 'Calculator',
    subTitle: '',
    description: 'Our calculator can provide you with useful information about your prescription. By specifying the ingredients, you can easily get information about the total calorie content, the total content of fat, proteins, vitamins, and other related indicators, as well as their percentage of the daily norm.',
    link: '/calculator',
  },
  {
    title: 'Generator',
    subTitle: '',
    description: '',
    link: '/constructor',
  },
]
