import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    addSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
