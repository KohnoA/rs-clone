import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchState {
    searchList: string;
}

const initialState = (): ISearchState => {
    const searchList = '';
    return {searchList}
}

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: initialState,
    reducers: {
        searchRecipe(state, action: PayloadAction<string>) {
            let list = state.searchList;
            const request = action.payload

            list = `${request}`
        }
    }
})
