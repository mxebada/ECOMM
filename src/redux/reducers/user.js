import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    online: false,
    users: [],
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.online = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.online = false;
      state.user = {};
    },
    addUser: (state, action) => {
      let id = Date.now();
      state.users.push({ ...action.payload, id });
    },
    updateUser: (state, action) => {
      let data = action.payload;
      const users = state.users.map((ele) => {
        if (data.id === ele.id) {
          return data;
        } else {
          return ele;
        }
      });
      state.users = users;
    },
  },
});

export const { login, logout, addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
