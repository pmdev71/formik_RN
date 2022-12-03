import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    removeUser: (state, action) => {
      state = {};
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
