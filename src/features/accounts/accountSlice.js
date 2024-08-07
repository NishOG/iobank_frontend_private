import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import ng from '../../img/ng.png';
import us from '../../img/us.png';
import gb from '../../img/gb.png';
import eu from '../../img/eu.png';
import cn from '../../img/cn.png';
import ind from '../../img/in.png';

const initialState = {
  accounts: [],
  transactions: [],
  status: 'IDLE', // IDLE, PENDING, SUCCESS, or ERROR
  recipientAccount: null
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
    const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
    console.log(`Account Details: ${JSON.stringify(accountDetails)}`)
    const {data, error} = await api.post('/accounts', accountDetails, headers)
    if(error) throw error;
    return data
  } catch(err) {
    throw new Error(err.message)
  }
})

export const fetchAccountHolder = createAsyncThunk("accounts/find", async (details) => {
  try{
    const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
    console.log(details)
    const {data, error} = await api.post(`/accounts/find`, details,  headers)
    if(error) throw error;
    console.log(data)
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
        },
        resetRecipient: (state) => {
          state.recipientAccount = null
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
              if (acc.code === 'INR') flag = ind
              if (acc.code === 'CNY') flag = cn
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
            state.accounts.push(action.payload)
          })
          .addCase(createAccount.rejected, (state, action) => {
            state.status = 'FAILED';
            console.log('Account creation failed:', action.error);
          })
          .addCase(fetchAccountHolder.pending, (state) => {
            state.status = 'PENDING';
          })
          .addCase(fetchAccountHolder.fulfilled, (state, action) => {
            state.status = 'SUCCESS';
            console.log(`Current State: ${state.status}`)
            state.recipientAccount = action.payload
          })
          .addCase(fetchAccountHolder.rejected, (state, action) => {
            state.status = 'FAILED';
            console.log('Account holder search failed:', action.error);
          })
      }
    }
)

export const fetchAccountStatus = state => state.accounts.status
export const { addAccount, addTransaction, resetAccountStatus, resetRecipient } = accounsSlice.actions;
export const fetchRecipient = state => state.accounts.recipientAccount;

export default accounsSlice.reducer;
export const accounts = state => state.accounts.accounts