import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../services/api';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData, thunkApi) => {
    try {
      const data = await userAPI.registerUser(formData);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (formData, thunkApi) => {
    try {
      const data = await userAPI.loginUser(formData);
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkApi) => {
    try {
      const data = await userAPI.logoutUser();
      localStorage.removeItem('token');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
