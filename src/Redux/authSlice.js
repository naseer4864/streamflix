import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    register: (state, action) => {
      state.user = action.payload; 
      state.isAuthenticated = true; 
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
