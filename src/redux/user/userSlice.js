import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = false;
      })

      .addCase(register.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
