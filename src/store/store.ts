import { configureStore } from '@reduxjs/toolkit';

import productSlice, { ProductState } from '@/sections/Product/productSlice';
import creditCardSlice, {
  CreditCardState,
} from '@/sections/CreditCardInfo/creditCardInfoSlice';

export interface RootState {
  product: ProductState;
  creditCard: CreditCardState;
}

const store = configureStore({
  reducer: {
    product: productSlice,
    creditCard: creditCardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
