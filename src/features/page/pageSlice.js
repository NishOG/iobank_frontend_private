import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSpinner: false
}

export const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        openSpinner: (state) => {
            state.showSpinner = true;
        },
        closeSpinner: (state) => {
            state.showSpinner = false;
        }
    }
})

export const { openSpinner, closeSpinner } = pageSlice.actions
export const showSpinner = (state) => state.pages.showSpinner

export default pageSlice.reducer;