import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
  isLoading: true,
};
const extraActions = [registerUser, loginUser, logoutUser, getCurrentUser];
const getActions = type => extraActions.map(action => action[type]);

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
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = false;
      })
      // .addMatcher(
      //   isAnyOf(loginUser, registerUser).fulfilled,
      //   handleFulfilledLogin
      // )

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

function handlePending(state) {
  state.error = false;
  state.isLoading = true;
}

function handleRejected(state) {
  state.error = true;
  state.isLoading = false;
}

// function handleFulfilledLogin (state, action)  {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
//   state.isLoading = false;
//   state.error = false;
// };

export const userReducer = userSlice.reducer;
