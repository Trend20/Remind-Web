import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  isDone: false,
  isStarted: false,
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers:{
    checkIsComplete: (state, action) =>{
      state.isDone = action.payload;
    }
  }
})

export const { checkIsComplete} = taskSlice.actions;
export default taskSlice.reducer;