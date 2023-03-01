import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../services/api';

export const register = createAsyncThunk(
  'user/register',
  async (formData, thunkApi) => {
    try {
      const data = await userAPI.register(formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
