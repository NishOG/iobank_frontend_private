import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    { id: 1, currencyType: 'USD', name: "Checking", balance: 1000 }
  ],
  transactions: [],
};

export const accounsSlice = createSlice(
    {
      name: "accounts",
      initialState,
      reducers: {
        addAccount: (state, action) => {
          state.accounts.push(action.payload);
        },
        addTransaction: (state, action) => {
          state.transactions.push(action.payload);
        },
      },
    }
)

export const { addAccount, addTransaction } = accounsSlice.actions;

export default accounsSlice.reducer;