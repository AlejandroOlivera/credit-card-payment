import { createSlice } from '@reduxjs/toolkit';

export interface CreditCardState {
  cardNumber: string;
  name: string;
  expiryDate: string;
  cvc: string;
}

const initialState = {
  cardNumber: '',
  name: '',
  expiryDate: '',
  cvc: '',
};

const creditCardSlice = createSlice({
  name: 'creditcard',
  initialState,
  reducers: {
    setCardNumber(state, action) {
      state.cardNumber = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setExpiryDate(state, action) {
      state.expiryDate = action.payload;
    },
    setCvc(state, action) {
      state.cvc = action.payload;
    },
    resetCreditCard(state) {
      state.cardNumber = '';
      state.name = '';
      state.expiryDate = '';
      state.cvc = '';
    },
  },
});

export const {
  setCardNumber,
  setName,
  setExpiryDate,
  setCvc,
  resetCreditCard,
} = creditCardSlice.actions;

export default creditCardSlice.reducer;
