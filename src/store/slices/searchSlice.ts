import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchState {
    search: string;
    isEditing: boolean;
}

const initialState: ISearchState = {
    search: '',
    isEditing: false,
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.isEditing = true
    },
    setIsEditing(state, action: PayloadAction<boolean>) {
      state.isEditing = action.payload
    },
    resetSearch(state) {
      state.search = ''
      state.isEditing = false
    }
  }
})
