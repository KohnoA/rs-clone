import { IMainAppInfo, IDevelopersInfo } from '../types/types'
import nexusLolzPhoto from '../assets/images/nexusLol.jpg'
import kohnoAPhoto from '../assets/images/kohnoA.jpg'

export const GITHUB_ACCOUNTS = [
  'https://github.com/KohnoA',
  'https://github.com/Nexuslolz',
  'https://github.com/shamkolovich95',
]
export const initialCalories = 0
export const EMAIL_REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const MIN_PASSWORD_LENGTH = 6
export const MAX_PASSWORD_LENGTH = 15
export const MIN_NAME_LENGTH = 3
export const MAX_NAME_LENGTH = 16
export const NUTRITION_ANALYSIS_APP_ID = 'c1373a30'
export const NUTRITION_ANALYSIS_APP_KEY = 'df20c251f90c957e7829cc43301294f5'
export const NUTRITION_ANALYSIS_BASE_REQUEST = 'https://api.edamam.com/api/nutrition-details'

export const enum Validations {
  email = 'email',
  password = 'password',
  name = 'name',
}

export const enum ModalContent {
  signIn = 'Sign In',
  signUp = 'Sign Up',
}

export const enum AuthErrorsMessage {
  invalidFields = 'Invalid form fields',
  notFound = 'Incorrect login or password!',
  isExist = 'User with this email is already registered',
}

export const enum CalculatorErrorMessage {
  empty = 'Please fill in the field!',
  requestError = 'Processing error, please check your data or try again later',
  none = '',
}

export const enum MainRequestsQuery {
  balance = 'diet=balanced',
  breakfast = 'mealType=Breakfast',
  dinner = 'mealType=Dinner',
  lunch = 'mealType=Lunch',
}

export const MAIN_APP_INFO: IMainAppInfo[] = [
  {
    title: 'Recipes',
    subTitle: 'Want to find info about a recipe?',
    description: 'Use our recipe database. In it you can find the recipe you are interested in and learn all the useful information about it. The content of proteins, fats, carbohydrates, other nutrients, as well as what you need in order to prepare this dish.',
    link: '/',
  },
  {
    title: 'Calculator',
    subTitle: 'Want to count your total calories?',
    description: 'Our calculator can provide you with useful information about your recipe. By specifying the ingredients, you can easily get information about the total calorie content, the total content of fat, proteins, vitamins, and other related indicators, as well as their percentage of the daily norm.',
    link: '/calculator',
  },
  {
    title: 'Constructor',
    subTitle: 'Want to start eating healthy?',
    description: 'Take advantage of our power constructor. Entering your parameters in the form. The algorithm will select for you the daily calorie intake, as well as offer your diet option for tomorrow\'s lunch and dinner.',
    link: '/constructor',
  },
]

export const DEVELOPERS_INFO: IDevelopersInfo[] = [
  {
    gitHub: GITHUB_ACCOUNTS[0],
    name: 'Kohno Alexander',
    subTitle: 'Team lead. Frontend developer',
    description: 'I am 22 years old, I am a 3rd year university student majoring in political science and law. Half a year ago, I realized that in my country I could not get a job in such a specialty anywhere. I started to learn about programming and I was attracted to it. I took a fixed layout course at HTML Academy, after which I learned about Rolling Scopes School and realized that this is a great opportunity to get a lot of practice and become a front-end developer.',
    contribution: 'Created the initial project config. Implemented the main page, calculator page. Created user authorization forms through Firebase. Followed the progress of the project.',
    image: kohnoAPhoto,
    location: 'Minsk, Belarus',
  },
  {
    gitHub: GITHUB_ACCOUNTS[1],
    name: 'Klyosov Alexander',
    subTitle: 'Frontend developer',
    description: 'I am 25 years old, was born in Russia, Chelyabinsk region, Magnitogorsk city. I graduated from medical university in Chelyabinsk. Later I moved to Yekaterinburg for further education. While I studied in medical university I decided to study and work in IT sphere. I want to be a developer. Languages which I learn now is HTML, CSS, JS. I very excited in process of studying. I really like it. I hope that after rs school graduation I will apply for a job in position of frontend developer.',
    contribution: 'Developed user control panel and recipes page. Implement adding recipes to favorite box. Created page of the recipe And the buy list for user with searching for ingredients.',
    image: nexusLolzPhoto,
    location: 'Yekaterinburg, Russia',
  },
  {
    gitHub: GITHUB_ACCOUNTS[2],
    name: 'Shamkolovich Sergey',
    subTitle: 'Frontend developer',
    description: 'I am developing person at the programming sphere. My profession mechanical engineer helps me to approximate to a solution of the problem intelligently and spliting difficult problems to more easily tasks. Also my profesion helps me notice discrepances in the final products. I have a fancy for diffrent difficult tasks and finding diffrent ways realization assigned tasks. I am aim to acquire knowledges for changing my profession, that is my main goal.',
    contribution: 'Connected to the Redux project, Implemented the constructor page, the page about us.',
    image: '',
    location: 'Minsk, Belarus',
  },
]
