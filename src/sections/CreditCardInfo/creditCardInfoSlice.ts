import { createSlice } from '@reduxjs/toolkit';

export interface CreditCardState {
  cardNumber: string;
  name: string;
  expiryDate: string;
  cvc: string;
  cardType: string;
  isValid: boolean;
}

const initialState: CreditCardState = {
  cardNumber: '',
  name: '',
  expiryDate: '',
  cvc: '',
  cardType: '',
  isValid: false,
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
    setCardType(state, action) {
      state.cardType = action.payload;
    },

    validateCreditCard(state) {
      state.isValid =
        state.cardNumber !== '' &&
        state.name !== '' &&
        state.expiryDate !== '' &&
        state.cvc !== '' &&
        state.cardType !== '';
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
  setCardType,
  resetCreditCard,
  validateCreditCard,
} = creditCardSlice.actions;

export default creditCardSlice.reducer;
