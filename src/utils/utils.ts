import { useEffect, useState } from 'react';
import { IState } from '../components/Calories/FormTypes';


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
