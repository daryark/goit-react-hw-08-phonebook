import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
  isLoading: true,
};
const extraActions = [registerUser, loginUser, logoutUser];
const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.error = false;
  state.isLoading = true;
};

const handleRejected = state => {
  state.error = true;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = false;
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
