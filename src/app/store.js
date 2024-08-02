import { configureStore } from "@reduxjs/toolkit";
import accountReducers from "../features/accounts/accountSlice";


export const store = configureStore(
    {
        reducer: {
            accounts: accountReducers
        },
    }
)
