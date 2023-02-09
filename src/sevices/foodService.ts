import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { DOMAIN, ID, API_KEY, FOOD, NUTRIENTS } from '../constants/foodApi';
import { IFoodApi } from '../models/IFood';

export const foodAPI = createApi({
  reducerPath: 'foodAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${DOMAIN}` }),
  endpoints: (build) => ({

    fetchAllFood: build.query<IFoodApi, number>({
      query: (session?: number) => ({
        url: `/${FOOD}`,
        params: {
            session: session,
            ['app_id']: ID,
            ['app_key']: API_KEY,
        },
      }),
    }),

    fetchNutrientsFood: build.mutation({
      query: () => ({
        url: `/${NUTRIENTS}`,
      }),
    }),

  }),
});
