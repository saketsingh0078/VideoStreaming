import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_CHAT_LIVE } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(OFFSET_CHAT_LIVE, 1);
      state.message.unshift(action.payload);
    },
    clearMessage: (state) => {
      state.message.length = 0;
    },
  },
});

export const { addMessage, clearMessage } = chatSlice.actions;
export default chatSlice.reducer;
