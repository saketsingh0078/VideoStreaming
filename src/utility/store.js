import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import searchVideoReducer from "./searchResultSlice";
import searchQueryReducer from "./searchQuerySlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    searchResult: searchVideoReducer,
    searchQuery: searchQueryReducer,
  },
});

export default store;
