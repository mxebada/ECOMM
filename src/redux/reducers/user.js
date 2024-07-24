import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    online: false,
    users: []
  },
  reducers: {
    login: (state, action) => {
      state.online = true;
    },
    logout: (state) => {
      state.online = false;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { login, logout, addUser } = userSlice.actions;

export default userSlice.reducer;
