import { configureStore } from '@reduxjs/toolkit';

import productSlice, { ProductState } from '@/sections/Product/productSlice';

export interface RootState {
  product: ProductState;
}

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
