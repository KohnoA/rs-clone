import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalContext } from '../../types/types';

const initialState: IModalContext = {
  isOpen: false,
  content: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<any>) {
      state.isOpen = true;
      state.content = action.payload.content;
    },

    closeModal(state) {
      state.isOpen = false;
    },
  }
});

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;