import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../services/api';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData, thunkApi) => {
    try {
      const data = await userAPI.registerUser(formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
