import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import ng from '../../img/ng.png';
import us from '../../img/us.png';
import gb from '../../img/gb.png';
import eu from '../../img/eu.png';

const initialState = {
  accounts: [],
  transactions: [],
  status: 'IDLE', // IDLE, PENDING, SUCCESS, or ERROR
};

export const fetchAccounts = createAsyncThunk('accounts/fetch', async () => {
  try{
    const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
    const {data, error} = await api.get('/accounts', headers)
    if(error) throw error;
    return data
  } catch(err) {
    throw new Error(err.message)
  }
})
export const createAccount = createAsyncThunk("accounts/create", async (accountDetails) => {
  try{
    console.log(`Printing out the access token from session: ${JSON.stringify(sessionStorage.getItem('access_token'))}`)
    const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
    console.log(`Account Details: ${JSON.stringify(accountDetails)}`)
    const {data, error} = await api.post('/accounts', accountDetails, headers)
    if(error) throw error;
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
        resetAccountStatus: (state) => {
          state.status = 'IDLE';
        }
      },
      extraReducers(builder) {
        builder
         .addCase(fetchAccounts.pending, (state) => {
            state.status = 'PENDING';
          })
         .addCase(fetchAccounts.fulfilled, (state, action) => {
            state.status ='SUCCESS';
            const fetchedAccounts = action.payload;
            const accounts = fetchedAccounts.map(acc => {
              let flag = us
              if (acc.code === 'USD') flag = us
              if (acc.code === 'NGN') flag = ng
              if (acc.code === 'EURO') flag = eu
              if (acc.code === 'GPB') flag = gb
              return {...acc, flag}
            })
            state.accounts = accounts; 
          })
         .addCase(fetchAccounts.rejected, (state, action) => {
            state.status = 'FAILED';
            console.log('Fetch failed:', action.error);
          })
          .addCase(createAccount.pending, (state) => {
            state.status = 'PENDING';
          })
          .addCase(createAccount.fulfilled, (state, action) => {
            state.status = 'SUCCESS';
            console.log(`Account created successfully: ${JSON.stringify(action.payload)}`)
            state.accounts.push(action.payload)
          })
          .addCase(createAccount.rejected, (state, action) => {
            state.status = 'FAILED';
            console.log('Account creation failed:', action.error);
          })
      }
    }
)

export const fetchAccountStatus = state => state.accounts.status
export const { addAccount, addTransaction, resetAccountStatus } = accounsSlice.actions;

export default accounsSlice.reducer;
export const accounts = state => state.accounts.accounts