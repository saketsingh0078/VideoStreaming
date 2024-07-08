import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentsContainer } from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-8 py-5">
      <iframe
        className="aspect-video"
        width="900"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
