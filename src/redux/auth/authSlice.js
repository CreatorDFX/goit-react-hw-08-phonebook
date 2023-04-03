import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.fetchCurrentUser.matchFulfilled,
                (state, { payload }) => {
                    state.token = payload.token;
                    state.user = payload.user;
                    state.isLoggedIn = true;
                }
            )
            .addMatcher(
                authApi.endpoints.fetchCurrentUser.matchRejected,
                (state, { payload }) => {
                    state.token = payload.token;
                    state.user = payload.user;
                    state.isLoggedIn = false;
                }
            )
            .addMatcher(
                authApi.endpoints.signup.matchFulfilled,
                (state, { payload }) => {
                    state.token = payload.token;
                    state.user = payload.user;
                    state.isLoggedIn = true;
                }
            )
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, { payload }) => {
                    state.token = payload.token;
                    state.user = payload.user;
                    state.isLoggedIn = true;
                }
            )
            .addMatcher(
                authApi.endpoints.login.matchRejected,
                (state, { payload }) => {
                    state.isLoggedIn = false;
                }
            )
            .addMatcher(
                authApi.endpoints.logout.matchFulfilled,
                (state, { payload }) => {
                    state.user = { name: null, email: null };
                    state.token = null;
                    state.isLoggedIn = false;
                }
            )
    },
})

export default authSlice.reducer
