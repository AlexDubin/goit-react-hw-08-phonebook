import { loginUser, logoutUser, refreshUser, registerUser } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  authentificated: false,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // Register
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
      state.authentificated = false;
    },
    [registerUser.fulfilled](state, action) {
      state.isLoading = false;
      state.authentificated = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    },
    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Login
    [loginUser.pending](state) {
      state.isLoading = true;
      state.error = null;
      state.authentificated = false;
    },
    [loginUser.fulfilled](state, action) {
      state.isLoading = false;
      state.authentificated = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Refresh
    [refreshUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.userData = action.payload;
      state.isLoading = false;
      state.authentificated = true;
    },
    [refreshUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Logout
    [logoutUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled](state, action) {
      state.userData = null;
      state.token = null;
      state.isLoading = false;
      state.authentificated = false;
    },
    [logoutUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
