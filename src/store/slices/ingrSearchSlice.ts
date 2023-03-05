import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchState {
  searchIngr: string;
    isEditing: boolean;
}

const initialState: ISearchState = {
  searchIngr: '',
    isEditing: false,
}

export const ingrSearchSlice = createSlice({
  name: 'ingrSearchSlice',
  initialState: initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchIngr = action.payload
      state.isEditing = true
    },
    setIsEditing(state, action: PayloadAction<boolean>) {
      state.isEditing = action.payload
    },
    resetSearch(state) {
      state.searchIngr = ''
      state.isEditing = false
    }
  }
})
