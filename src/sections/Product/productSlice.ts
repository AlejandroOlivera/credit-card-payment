import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProductState {
  id: number;
  name: string;
  price: number;
  showModal: boolean;
}

const initialState: ProductState = {
  id: 0,
  name: '',
  price: 0,
  showModal: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductState>) => action.payload,
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { addProduct, openModal, closeModal } = productSlice.actions;

export default productSlice.reducer;
