import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import creditCardImage from "../../img/credit_card.png"
import api from "../../api/api"

 const initialState =  {
    card: null,
    transactions: [],
    status: 'IDLE'
};

export const createCard = createAsyncThunk("card/create", async (amount) => {
    try{
        const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
        const {data, error} = await api.post(`/cards/create?amount=${amount}`, null, headers)
        if(error) throw error;
        console.log(data)
        return data
    } catch(err) {
        throw new Error(err.message)
    }
})
export const creditCard = createAsyncThunk("card/credit", async (amount) => {
    try{
        const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
        const {data, error} = await api.post(`/cards/credit?amount=${amount}`, null, headers)
        if(error) throw error;
        console.log(data)
        return data
    } catch(err) {
        throw new Error(err.message)
    }
})

export const fetchCard = createAsyncThunk("card/fetch", async () => {
    try{
        const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
        const {data, error} = await api.get(`/cards`, headers)
        if(error) throw error;
        console.log(data)
        return data
    } catch(err) {
        throw new Error(err.message)
    }
})

export const deleteCard = createAsyncThunk("card/delete", async() => {
    try{
        const headers = {Authorization: `${sessionStorage.getItem('access_token')}`}
        const {data, error} = await api.delete(`/cards`, headers)
        if(error) throw error;
        console.log(data)
        return data
    } catch(err) {
        throw new Error(err.message)
    }
})
export const cardSlicer = createSlice(
    {
        name: 'cards',
        initialState,
        reducers: {
            addTransaction: (state, action) => {
                state.transactions.push(action.payload);
            },
            resetCardStatus: (state) => {
                state.status = 'IDLE'
            }
        },
        extraReducers (builder) {
            builder
             .addCase(createCard.pending, (state) => {
                state.status = 'PENDING'
            })
            .addCase(createCard.fulfilled, (state, action) => {
                console.log('Card Creation successful')
                console.log(action.payload)
                state.card = action.payload
                state.status = 'SUCCESS'
            })
            .addCase(createCard.rejected, (state) => {
                console.log('Card Creation Failed: ')
                state.status = 'FAILED' 
           })
           .addCase(fetchCard.pending, (state) => {
                state.status = 'PENDING'
            })
            .addCase(fetchCard.fulfilled, (state, action) => {
                console.log('Card Fetch successful')
                state.card = {...action.payload, img: creditCardImage}
                state.status = 'SUCCESS'
            })
            .addCase(fetchCard.rejected, (state) => {
                console.log('Card Fetch Failed: ')
                state.status = 'FAILED'
            })
        }
    }
)

export const { resetCardStatus } = cardSlicer.actions;

export default cardSlicer.reducer;

export const fetchCardStatus = state => state.cards.status
export const card = state => state.cards.card;