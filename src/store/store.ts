import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { foodAPI } from '../sevices/foodService';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';

const rootReducer = combineReducers({
    [foodAPI.reducerPath]: foodAPI.reducer,
    user: userReducer,
    modal: modalReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(foodAPI.middleware);
    }
  });
};

export type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
