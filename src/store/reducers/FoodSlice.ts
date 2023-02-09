import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFoodApi } from '../../models/IFood';
import { fetchFood } from './ActionCreater';


interface FoodState {
    allFood: Partial<IFoodApi>,
    isLoading: boolean,
    error: string,
};

const initialState: FoodState = {
    allFood: {},
    isLoading: false,
    error: '',
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFood.fulfilled.type]: (state, action: PayloadAction<IFoodApi>) => {
      state.isLoading = false;
      state.error = '';
      state.allFood = action.payload;
    },
    [fetchFood.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFood.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const foodReducer = foodSlice.reducer;
