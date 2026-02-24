import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { loadAuthState } from "./loadAuthState";



const store = configureStore({
    reducer: {
        'auth': authReducer,
    },
    preloadedState: loadAuthState(),
})



export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;