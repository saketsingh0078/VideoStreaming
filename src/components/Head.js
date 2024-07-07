import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utility/appSlice";
import {
  YOUTUBE_SEARCH_API_LINK,
  YOUTUBE_SEARCH_QUERY,
} from "../utility/constants";
import { cacheResults } from "../utility/searchSlice";
import { Link } from "react-router-dom";
import { addSearchVideo } from "../utility/searchResultSlice";
import { addSearchQuery } from "../utility/searchQuerySlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_LINK + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    getSearchResultVideo();
  }, [searchQuery]);

  const getSearchResultVideo = async () => {
    if (searchQuery) {
      const data = await fetch(YOUTUBE_SEARCH_QUERY + searchQuery);
      const json = await data.json();
      dispatch(addSearchVideo(json.items));
      dispatch(addSearchQuery(searchQuery));
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="px-4 py-2 w-full h-[9vh] flex shadow-lg ">
      <div className="flex gap-[1vw] w-[15%]  ">
        <img
          className="w-[2.5vw] cursor-pointer"
          src="https://w7.pngwing.com/pngs/513/277/png-transparent-computer-icons-menu-bar-icon-design-hamburger-button-others-miscellaneous-angle-text-thumbnail.png"
          alt="menu-icon"
          onClick={toggleMenuHandler}
        />
        <img
          className="w-[10vw]"
          src="https://i.pinimg.com/736x/d2/0e/f6/d20ef62b2183376cbd6f1df28151edf1.jpg"
          alt="youtube-logo"
        />
      </div>

      <div className="relative flex w-[70%] justify-center">
        <input
          className="p-4 text-lg border-2 w-[50%] rounded-l-full border-black"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border-2 border-black rounded-r-full bg-gray-200 px-3 py-1">
          <img
            className="w-[2.4vw] "
            src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
            alt="search-icon" 
          />
        </button>
        {showSuggestions && (
          <div className="absolute top-full w-[50%] bg-white left-[22.5%]">
            <ul className=" w-full text-lg  ">
              {suggestions.map((elem) => (
                <li className="px-2 py-1 border-b-2 border-gray-100 hover:bg-gray-200">
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-[15%] flex justify-end px-2 py-1">
        <img
          className="w-[2.5vw]"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
