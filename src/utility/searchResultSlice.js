import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    searchVideo: null,
  },
  reducers: {
    addSearchVideo: (state, action) => {
      state.searchVideo = action.payload;
    },
  },
});

export const { addSearchVideo } = searchResultSlice.actions;
export default searchResultSlice.reducer;
