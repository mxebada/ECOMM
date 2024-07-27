import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    online: false,
    users: [],
    user:{}
  },
  reducers: {
    login: (state,action) => {
        state.online = true
        state.user = action.payload
    },
    logout: (state) => {
      state.online = false
      state.user = {}
    },
    addUser: (state,action) =>{
        state.users.push(action.payload)
    }
 
  },
});

export const { login, logout, addUser } = userSlice.actions;

export default userSlice.reducer;
