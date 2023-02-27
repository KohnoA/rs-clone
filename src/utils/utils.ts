import { useEffect, useState } from 'react';
import { IState } from '../components/Calories/FormTypes';
import { IRecipe } from '../models/IRecipes';


export const useStateCustom = <T>(key: string, initialState: T): IState<T> => {
  const json = sessionStorage.getItem(key);

  const [state, stateFn] = json ? useState<T>(JSON.parse(json)) : useState<T>(initialState);

    useEffect(() => {
      sessionStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [
      state,
      stateFn,
    ];
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const checkDuplicates = (arr: IRecipe[], item: IRecipe) => {
  const myArr = [...arr, item];
  const set = new Set(myArr);
  return set.size === myArr.length ? true : false;
};

export const currentId = (recipe: IRecipe) => {
  const mainLink = recipe.recipe.uri;
  const uri = mainLink.slice(mainLink.indexOf('_') + 1)
  return(uri)
}
