import React, { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { VIDEO_API } from "../utility/constants";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    getVideo();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      getVideo();
    }
  };

  const getVideo = async () => {
    setShowShimmer(true);
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setShowShimmer(false);
    setVideos((videos) => [...videos, ...json.items]);
  };

  return (
    <>
      <div className="mx-1 px-2 py-2 flex flex-wrap ">
        {videos.map((video, i) => (
          <Link key={i} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
      {showShimmer && <Shimmer />}
    </>
  );
};

export default VideoContainer;
