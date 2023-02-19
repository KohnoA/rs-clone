import { IFilters } from '../types/types'

// data base for recipe filters
export const RecipeFiltersData: IFilters[] = [{
    id: 0,
    query: 'diet',
    header: 'Diet',
    items: {
        item1: 'balanced',
        item2: 'high-fiber',
        item3: 'high-protein',
        item4: 'low-carb',
        item5: 'low-fat',
        item6: 'low-sodium',
        }
    },
    {
    id: 1,
    query: 'health',
    header: 'Health',
    items: {
        item1: 'vegetarian',
        item2: 'alcohol-free',
        item3: 'vegan',
        item4: 'pork-free',
        item5: 'gluten-free',
        item6: 'fish-free',
        }
    },
    {
    id: 2,
    query: 'mealType',
    header: 'Meal type',
    items: {
        item1: 'breakfast',
        item2: 'lunch',
        item3: 'dinner',
        item4: 'snack',
        item5: 'tea-time',
        }
    },
    {
    id: 3,
    query: 'cuisineType',
    header: 'Cuisune',
    items: {
        item1: 'American',
        item2: 'Asian',
        item3: 'French',
        item4: 'Italian',
        item5: 'Mexican',
        }
    },
]
