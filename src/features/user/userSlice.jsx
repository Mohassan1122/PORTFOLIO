// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for user registration
// export const register = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:8000/api/register', userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });
export const register = createAsyncThunk('user/register', async (userData) => {
    const response = await axios.post('http://localhost:8000/api/register', userData);
    return response.data;
  });

// Thunk for user login
// export const login = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:8000/api/login', userData);
//     return response.data;
//   } catch (error) {
//     console.error("Login error:", error.response.data);
//     return rejectWithValue(error.response.data);
//   }
// });
export const login = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

// Thunk for fetching user data
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, { getState, rejectWithValue }) => {
    const token = getState().user.token;
    if (!token) return rejectWithValue('No token available');
  
    try {
      const response = await axios.get('http://localhost:8000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
// export const fetchUserData = createAsyncThunk('user/fetchUserData', async (_, { getState, rejectWithValue }) => {
//   const token = getState().user.token;
//   console.log("Token: ", token);
//   if (!token) {
//     return rejectWithValue('No token available');
//   }
//   try {
//     const response = await axios.get('http://localhost:8000/api/user', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("name: ", response.data);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: null,
      token: localStorage.getItem('token') || null,
      status: 'idle',
      error: null,
    },
    reducers: {
      logout: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem('token');
      },
    },
    extraReducers: (builder) => {
      builder.addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
      builder.addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      });
      builder.addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
      builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
      });
      builder.addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
      });
    },
  });
  
  export const { logout } = userSlice.actions;
  export default userSlice.reducer;
