import { createSlice } from "@reduxjs/toolkit";

 const initialState =  {
    card: { 
        id: 1, 
        currencyType: 'USD', 
        balance: 1000, 
        cardHolder: "Isaiah Osarobo",
        bankName: 'IO BANK',
        symbol: '$', 
        cardNumber: 880983298590182,
        cardType: 'MasterCard',
        expirationDate: '09/25',
        cvv: 123,
        billingName: 'Isaiah Osarobo',
        billingCity: 'New York',
        billingState: 'NY',
        billingAddress: '8, Dexterity Avenue P.O Box 44120'
    },
     
    transactions: [],
};

export const cardSlice = createSlice(
    {
        name: 'card',
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

export const { addTransaction, createCard } = cardSlice.actions;

export default cardSlice.reducer;

export const card = state => state.card.card;