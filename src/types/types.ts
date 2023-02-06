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

export const URLS = {
    start: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&imageSize=REGULAR&random=true',
    balanced: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&diet=balanced',
    highFiber: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&diet=high-fiber',
    highProtein: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&diet=high-protein',
    lowCarb: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&diet=low-carb',
    lowFat: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&diet=low-fat',
    lowSodium: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&diet=low-sodium',
    vegetarian: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&health=vegetarian',
    alcoholFree: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&health=alcohol-free',
    vegan: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&health=vegan',
    porkFree: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&health=pork-free',
    glutenFree: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&health=gluten-free',
    fishFree: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&health=fish-free',
    breakfast: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&mealType=Breakfast',
    lunch: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&mealType=Lunch',
    dinner: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&mealType=Dinner',
    snack: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&mealType=Snack',
    teaTime: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&mealType=Teatime',
    american: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&cuisineType=American',
    asian: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&cuisineType=Asian',
    french: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&cuisineType=French',
    italian: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&cuisineType=Italian',
    mexican: 'https://api.edamam.com/api/recipes/v2?type=public&app_id=7e3bd218&app_key=c984c0db6f24715dbed35ba4812c946f&cuisineType=Mexican',
}

export interface IRecipes {
    url: string;
}
