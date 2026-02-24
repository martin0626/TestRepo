


import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';


type userType = {
    email: string;
    fullName: string;
}

export type authInitialStateT = {
    authToken: string | null;
    user: userType | null;
};



const initialState: authInitialStateT = {
  authToken: null,
  user: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{token: string}>) => {
            const token = action.payload.token;
            state.authToken = token;

            const decoded = jwtDecode<{
                  email: string
                  fullName: string,
                }>(token)

            state.user = {
                email: decoded.email,
                fullName: decoded.fullName,
            };
            localStorage.setItem('token', token);
        },
        
        logout: (state) => {
            state.authToken = null;
            state.user = null;
            localStorage.removeItem('token');
        },
    },
});


export const authActions = authSlice.actions;
export default authSlice.reducer;