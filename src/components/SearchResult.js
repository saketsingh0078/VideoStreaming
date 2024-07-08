import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const searchVideo = useSelector((store) => store.searchResult.searchVideo);

  if (!searchVideo) return;

  return (
    <div>
      {searchVideo.map((elem) => (
        <SearchCard info={elem} />
      ))}
    </div>
  );
};

export default SearchResult;
