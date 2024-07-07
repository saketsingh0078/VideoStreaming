import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utility/appSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="p-2 shadow-md text-nowrap">
      <div className="border-b-2 border-gray-200 shadow-sm px-4 py-3">
        <ul>
          <li>
            <Link to="/" onClick={handleSidebar}>
              Home
            </Link>
          </li>
          <li>Short</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div className="border-b-2 border-gray-200 shadow-sm px-4 py-3">
        <h1 className="font-bold text-lg">
          You <span>{">"}</span>
        </h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Watch later</li>
        </ul>
      </div>

      <div className="border-b-2 border-gray-200 shadow-sm px-4 py-3">
        <h1 className="font-bold text-lg">Subscriptions</h1>
        <ul>
          <li>The Trade Room</li>
          <li>THE INDIAN TRADER</li>
          <li>PaisaToBanega</li>
          <li>All subscriptions</li>
        </ul>
      </div>

      <div className="border-b-2 border-gray-200 shadow-sm px-4 py-3">
        <h1 className="font-bold text-lg">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcats</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
