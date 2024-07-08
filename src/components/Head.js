import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utility/appSlice";
import {
  YOUTUBE_SEARCH_API_LINK,
  YOUTUBE_SEARCH_QUERY,
} from "../utility/constants";
import { cacheResults } from "../utility/searchSlice";
import { addSearchVideo } from "../utility/searchResultSlice";
import { addSearchQuery } from "../utility/searchQuerySlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="px-4 py-2 w-full h-[9vh] flex shadow-lg ">
      <div className="flex gap-[1vw] w-[15%] items-center">
        <img
          className="w-[2.5vw] h-[3vh]  cursor-pointer object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu-icon"
          onClick={toggleMenuHandler}
        />
        <Link to="/">
          <img
            className="w-[10vw] h-[7vh] object-cover"
            src="https://logowik.com/content/uploads/images/899_youtube_2017logo.jpg"
            alt="youtube-logo"
          />
        </Link>
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
        <button
          className="border-2 border-black rounded-r-full px-3 py-1 hover:bg-slate-50"
          onClick={handleSearchClick}
        >
          <img
            className="w-[2.4vw] "
            src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
            alt="search-icon"
          />
        </button>
        {showSuggestions && (
          <div className="absolute top-full w-[50%] bg-white left-[22.5%]">
            <ul className=" w-full text-lg  ">
              {suggestions.map((elem, index) => (
                <li
                  key={index}
                  className="px-2 py-1 border-b-2 border-gray-100 hover:bg-gray-200 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(elem)}
                >
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-[15%] flex justify-end px-2 py-1 ">
        <img
          className="w-[2.5vw] rounded-full"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
