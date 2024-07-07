import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_QUERY } from "../utility/constants";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const searchVideo = useSelector((store) => store.searchResult.searchVideo);
  console.log(searchVideo);
  // if (!searchVideo) return;

  return <div>Hi from search</div>;
};

export default SearchResult;
