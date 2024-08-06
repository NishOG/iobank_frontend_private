import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    user: {}, 
    status: 'IDLE',
    error: null
}

export const authenticateUser = createAsyncThunk("users/autheticate", async (userDetails) =>{
         try{
                const{data, error} = await api.post('/users/auth', userDetails)
                if(error) throw error;
            } catch(err) {
                console.log(err.message)
         }
    }
)

export const registerUser = createAsyncThunk("users/register", async (userDetails) => {
    try{
            const{data, error} = await api.post('/users/register', userDetails)
            if(error) throw error;
        } catch(err) {
            console.log(err.message)
        }
    }
)

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
    },
    extraReducer(builder) {
        builder.addCase(authenticateUser.pending, (state) => state.status === 'PENDING' )
                .addCase(authenticateUser.fulfilled, (state) => state.status === 'SUCCESS' )
                .addCase(authenticateUser.rejected, (state) => state.status === 'FAILED' )
                .addCase(registerUser.pending, (state) => state.status === 'PENDING')
                .addCase(registerUser.fulfilled, (state) => state.status === 'SUCCESS')
                .addCase(registerUser.rejected, (state) => state.status === 'FAILED')
    }
})

export const { setUser, setUserError } = userSlice.actions;

export default userSlice.reducer;