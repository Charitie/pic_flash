import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

type User = {
  name: string;
  id: number;
  email: string;
  phone: string;
  username: string;
  website: string;
};

type UsersState = {
  users: [];
  user: User;
  status: 'idle' | 'loading' | 'fulfilled' | 'failed';
  error: null;
  userAlbums: [];
};
const initialState = {
  users: [],
  user: {},
  userAlbums: [],
  status: 'idle',
  error: null,
} as UsersState;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (searchParam: string) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    if (searchParam.length > 2) {
      const filteredUsers = response.data.filter(
        (user: User) =>
          user.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          user.email.toLowerCase().includes(searchParam.toLowerCase()) ||
          user.username.toLowerCase().includes(searchParam.toLowerCase()),
      );
      return filteredUsers;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (userId: number) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
});

export const fetchUserAlbums = createAsyncThunk('albums/fetchUserAlbums', async (userId: number) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}/albums`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserAlbums.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserAlbums.fulfilled, (state, action) => {
        state.userAlbums = action.payload;
      });
  },
});

export const selectAllUsers = (state: { users: { users: [] } }) => state.users.users;
export const selectSingleUser = (state: { users: { user: User } }) => state.users.user;
export const getUsersStatus = (state: { users: { status: string } }) => state.users.status;
export const selectAllUserAlbums = (state: { users: { userAlbums: [] } }) => state.users.userAlbums;

export default usersSlice.reducer;
