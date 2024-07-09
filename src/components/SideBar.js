import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utility/appSlice";

const SidebarList = {
  you: ["History", "Playlists", "Watch later"],
  subscription: [
    "The Trade Room",
    "THE INDIAN TRADER",
    "PaisaToBanega",
    "All subscriptions",
  ],
  explore: [
    "Trending",
    "Shopping",
    " Music",
    "Movies",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Courses",
    "Fashion & Beauty",
    "Podcats",
  ],
};

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
          {SidebarList.you.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>

      <div className="border-b-2 border-gray-200 shadow-sm px-4 py-3">
        <h1 className="font-bold text-lg">Subscriptions</h1>
        <ul>
          {SidebarList.subscription.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>

      <div className="border-b-2 border-gray-200 shadow-sm px-4 py-3">
        <h1 className="font-bold text-lg">Explore</h1>
        <ul>
          {SidebarList.explore.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
