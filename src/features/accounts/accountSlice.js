import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
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

export const fetchAccounts = createAsyncThunk('fetch/accounts', async () => {
  try{
    console.log(`Printing out the access token from session: ${JSON.stringify(sessionStorage.getItem('access_token'))}`)
    const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
    const {data, error} = await api.get('/accounts', headers)
    if(error) throw error;
    console.log(JSON.stringify(data));
    return data
  } catch(err) {
    throw new Error(err.message)
  }
})
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
      extraReducers(builder) {
        builder
         .addCase(fetchAccounts.pending, (state) => {
            state.status = 'loading';
          })
         .addCase(fetchAccounts.fulfilled, (state, action) => {
            state.status ='succeeded';
            const fetchedAccounts = action.payload;
            const accounts = fetchedAccounts.map(acc => {
              if (acc.currencyType == 'USD') acc.flag = us
              if (acc.currencyType == 'NGN') acc.flag = ng
              if (acc.currencyType == 'EURO') acc.flag = eu
              if (acc.currencyType == 'GPB') acc.flag = gb
            })
            state.accounts = accounts; 
          })
         .addCase(fetchAccounts.rejected, (state, action) => {
            state.status = 'failed';
            console.log('Fetch failed:', action.error);
          });
      }
    }
)

export const { addAccount, addTransaction } = accounsSlice.actions;

export default accounsSlice.reducer;
export const accounts = state => state.accounts.accounts