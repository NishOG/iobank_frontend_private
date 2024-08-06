import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')), 
    status: 'IDLE',
    error: null
}

export const authenticateUser = createAsyncThunk("users/autheticate", async (userDetails) =>{
         try{
                const{data, headers, error} = await api.post('/users/auth', userDetails)
                if(error) throw error;
                const authorization = headers.authorization
                console.log(authorization)
                sessionStorage.setItem('access_token', headers.authorization)
                sessionStorage.setItem('user', JSON.stringify(data))
                return data
            } catch(err) {
                console.log(err.message)
                throw err
         }
    }
)

export const registerUser = createAsyncThunk("users/register", async (userDetails) => {
    try{
            const{data, error} = await api.post('/users/register', userDetails)
            if(error) throw error;
            return data
        } catch(err) {
            console.log(err.message)
            throw err
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
        },
        resetStatus: (state) => {
            state.status = 'IDLE'
        }
    },
    extraReducers(builder) {
        builder.addCase(authenticateUser.pending, (state) => {
                    console.log(`Authentication Status: Pending`)
                    state.status = 'PENDING'
                })
                .addCase(authenticateUser.fulfilled, (state, action) => {
                    state.user = action.payload
                    console.log(`Header Details`)
                    state.status = 'SUCCESS'
                })
                .addCase(authenticateUser.rejected, (state) => {
                    console.log(`Authentication Status: Failed`)
                    state.status = 'FAILED'
                })
                .addCase(registerUser.pending, (state) => {
                    console.log(`Status: Pending`)
                    state.status = 'PENDING'
                })
                .addCase(registerUser.fulfilled, (state) => {
                    state.status = 'SUCCESS'
                    console.log(`Status: success`)
                    console.log(state.status)
                })
                .addCase(registerUser.rejected, (state) =>{ 
                    console.log(`Status: Failed`)
                    state.status = 'FAILED'
                })
    }
})

export const { setUser, setUserError, resetStatus } = userSlice.actions;

export const fetchedUser = state => state.user.user
export const fetchStatus = state => state.user.status
export default userSlice.reducer;