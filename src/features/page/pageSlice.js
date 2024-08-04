import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
const initialState = {
    showConvertPage: false,
}

export const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        closeConvertPage: (state) => state.showConvertPage = false,
        openConvertPage: (state) => state.showConvertPage = true
    }
})

export const { closeConvertPage, openConvertPage } = pageSlice.actions

export default pageSlice.reducer;