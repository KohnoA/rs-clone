import { createSlice } from '@reduxjs/toolkit';
import { ModalContent } from '../../constants/constants';

interface IModalContext {
  isOpen: boolean,
  content: ModalContent | null,
}

const initialState: IModalContext = {
  isOpen: false,
  content: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
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