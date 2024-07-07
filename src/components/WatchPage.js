import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utility/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5 py-5">
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
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
