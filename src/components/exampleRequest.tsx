/* eslint-disable @typescript-eslint/no-unused-vars */
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useState } from 'react';
// import { array } from 'yargs';
<<<<<<< HEAD
import { foodAPI } from '../sevices/foodService.api';
=======
import { foodAPI } from '../sevices/foodService';
>>>>>>> 4b288f03306da722acefbcbfd4f8353b0c8a8d14


export const Example = () => {
    const [session, setSession] = useState(0);
    const { data: foodApi, error, isLoading, refetch } = foodAPI.useFetchAllFoodQuery(session);
    const { data: recipes, } = foodAPI.useFetchRecipesStartQuery(''); // error: errorRecipes, isLoading: isLoadingRecipes
    console.log(recipes);

    return (
        <div> Example (you can find it: ./components/exampleRequest.tsx; PS: это маскимальное количество данных с одного запроса):
            <div>
                {isLoading && <h1>Идет загрузка...</h1>}       {/* Поменять в дальнейшем на нормальную загрузку */}
                {error && <h1>Error: {(error as FetchBaseQueryError).status}, </h1>}
                {foodApi && foodApi.hints.map((food, i) => {
                    return <div key={food.food.foodId}>{i + 1}){food.food.label}</div>
                })}
            </div>
            <button onClick={() => {
                setSession(session + 40);
                refetch();
            }}>
                следующие продукты
            </button>
        </div>
    );
};
