import { createSlice } from "@reduxjs/toolkit";

 const initialState =  {
    card: { 
        id: 1, 
        currencyType: 'USD', 
        balance: 1000, 
        cardHolder: "Isaiah Osarobo",
        bankName: 'IO BANK',
        symbol: '$', 
        billingAddress: '8, Dexterity Avenue P.O Box 44120',
    },
     
    transactions: [],
};

export const cardSlicer = createSlice(
    {
        name: 'cards',
        initialState,
        reducers: {
            addTransaction: (state, action) => {
                state.transactions.push(action.payload);
            },
            createCard: (state, action) => {
                state.card = action.payload;
            }
        },
    }
)

export const { addTransaction, createCard } = cardSlicer.actions;

export default cardSlicer.reducer;