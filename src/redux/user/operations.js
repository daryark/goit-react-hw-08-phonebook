import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', formData);
      token.set(data.token);
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
      const { data } = await axios.post('/users/login', formData);

      token.set(data.token);
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
      const { data } = await axios.post('/users/logout');

      token.unset();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      // if (state.userData.token === null) return;

      token.set(state.userData?.token);

      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
