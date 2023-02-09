import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN, ID, API_KEY, FOOD } from '../../constants/foodApi';
import { IFoodApi } from '../../models/IFood';

export const fetchFood = createAsyncThunk(
  'food/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IFoodApi[]>(`${DOMAIN}/${FOOD}?app_id=${ID}&app_key=${API_KEY}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
)
