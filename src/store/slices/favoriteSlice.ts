import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    favoriteList: string[];
}

const FAV_LIST_KEY = 'fav-list'
const initialState = (): IState => {
    const serializedList = localStorage.getItem(FAV_LIST_KEY) ?? '[]'
    const favoriteList: string[] = JSON.parse(serializedList)

    return  {favoriteList}
}


export const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState: initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<string>) {
            const list = state.favoriteList;
            const id = action.payload
            const foundIndex = list.indexOf(id)

            if (foundIndex !== -1) {
                list.splice(foundIndex, 1)
            } else {
                list.push(id)
            }

            const serializedList = JSON.stringify(list)
            localStorage.setItem(FAV_LIST_KEY, serializedList)
        } 
    }
})