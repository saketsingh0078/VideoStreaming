import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import searchVideoReducer from "./searchResultSlice";
import searchQueryReducer from "./searchQuerySlice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    searchResult: searchVideoReducer,
    searchQuery: searchQueryReducer,
    chat: chatReducer,
  },
});

export default store;
