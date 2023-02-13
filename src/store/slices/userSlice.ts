import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | null,
  token: string | null,
  id: string | null,
  name: string | null,
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },

    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
    },
  }
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer; // userReducer