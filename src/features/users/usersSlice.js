import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

initialState = {
    user: {}, 
    status: 'IDLE',
    error: null
}

export const authenticateUser = (userDetails) => {
    createAsyncThunk(api.post('/api/v1/users/auth', userDetails))
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.status = 'SUCCESS';
        },
        setUserError: (state, action) => {
            state.error = action.payload;
            state.status = 'ERROR';
        }
    }
})

export const { setUser, setUserError } = userSlice.actions;

export default userSlice.reducer;