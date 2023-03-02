import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  // token: null,
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
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.token = action.payload.token;
        state.isLoading = false;
        state.error = false;
      })

      .addCase(registerUser.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
