import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchCard = ({ info }) => {
  const dispatch = useDispatch();
  const { id } = info;
  const { snippet } = info;
  const { thumbnails } = snippet;

  return (
    <Link key={id.videoId} to={"/watch?v=" + id.videoId}>
      <div className="flex px-14 py-8 mb-3">
        <img
          className="w-[20vw] rounded-lg mr-6 shadow-md object-cover"
          src={thumbnails.high.url}
          alt="thumbail-img"
        />
        <div>
          <h1 className="font-bold text-lg mb-3">{snippet.title}</h1>
          <h1>{snippet.channelTitle}✔️</h1>
          <h1 className="mt-4">{snippet.description}</h1>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
