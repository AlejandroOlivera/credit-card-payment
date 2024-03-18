import { createSlice } from '@reduxjs/toolkit';

export interface CreditCardState {
  cardNumber: string;
  name: string;
  expiryDate: string;
  cvc: string;
  cardType: string;
  expiryDateIsValid: boolean;
}

const initialState: CreditCardState = {
  cardNumber: '',
  name: '',
  expiryDate: '',
  cvc: '',
  cardType: '',
  expiryDateIsValid: false,
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

    setExpiryDateIsValid(state, action) {
      state.expiryDateIsValid = action.payload;
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
  setExpiryDateIsValid,
} = creditCardSlice.actions;

export default creditCardSlice.reducer;
