import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { foodAPI } from '../sevices/foodService';

// all reducers in one combine reducer
const rootReducer = combineReducers({
    [foodAPI.reducerPath]: foodAPI.reducer,
});

// initialize store with reducer and adding middleware
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(foodAPI.middleware);
    }
  });
};

export type RootState = ReturnType<typeof rootReducer>; // use in typed Selector, path: ../hooks/redux.ts
type AppStore = ReturnType<typeof setupStore>; // 0
export type AppDispatch = AppStore['dispatch']; // use in typed dispatch, path: ../hooks/redux.ts
