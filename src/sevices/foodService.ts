import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { DOMAIN, ID, API_KEY, FOOD, NUTRIENTS, RECIPES, TYPE, IMAGE_SIZE } from '../constants/foodApi';
import { IFoodApi } from '../models/IFood';
import { IRecipes } from '../models/IRecipes';

export const foodAPI = createApi({
  reducerPath: 'foodAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${DOMAIN}` }),
  endpoints: (build) => ({

    fetchAllFood: build.query<IFoodApi, number>({
      query: (session?) => ({
        url: `/${FOOD}`,
        params: {
            session: session,
            ['app_id']: ID,
            ['app_key']: API_KEY,
        },
      }),
    }),

    // fetchNutrientsFood: build.mutation({
    //   query: () => ({
    //     url: `/${NUTRIENTS}`,
    //   }),
    // }),

    fetchRecipesStart: build.query<IRecipes, boolean>({
        query: (type) => ({
            url: `/${RECIPES}`,
            params: {
                type: type,
                ['app_id']: ID,
                ['app_key']: API_KEY,
                imageSize: IMAGE_SIZE,
            },
        }),
    }),

    // fetchRecipes:

  }),
});
