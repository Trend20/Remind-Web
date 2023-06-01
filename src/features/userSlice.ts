import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  role:'',
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'task',
  initialState,
  reducers:{
    getName: (state, action) =>{
      state.name = action.payload;
    }
  }
})

export const { getName} = userSlice.actions;
export default userSlice.reducer;