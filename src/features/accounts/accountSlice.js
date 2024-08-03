import { createSlice } from "@reduxjs/toolkit";
import ng from '../../img/ng.png';
import us from '../../img/us.png';
import gb from '../../img/gb.png';
import eu from '../../img/eu.png';

const initialState = {
  accounts: [
    { id: 1, currencyType: 'USD', name: "Checking", balance: 1000, accountName: "Isaiah Osarobo", accountNumber: 88888888, bankName: 'IO BANK',  symbol: '$' , flag: us, label: 'United States Dollar'},
    { id: 1, currencyType: 'NGN', name: "Checking", balance: 2000, accountName: "Isaiah Osarobo", accountNumber: 88888888, bankName: 'IO BANK',  symbol: '₦', flag: ng, label: 'Nigerian Naira' },
    { id: 1, currencyType: 'EURO', name: "Checking", balance: 3000, accountName: "Isaiah Osarobo", accountNumber: 88888888, bankName: 'IO BANK',  symbol: '€', flag: eu, label: 'European Euro' },
    { id: 1, currencyType: 'GPB', name: "Checking", balance: 4000, accountName: "Isaiah Osarobo", accountNumber: 88888888, bankName: 'IO BANK',  symbol: '£', flag: gb, label: 'British Pounds' },
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
export const accounts = state => state.accounts.accounts
export const ownerAccountsTypes = state => state.accounts.accounts.map(account => (account.currencyType))