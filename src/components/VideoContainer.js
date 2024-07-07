import React, { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { VIDEO_API } from "../utility/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideo();
  }, []);

  if (!videos) return;

  return (
    <div className="mx-1 px-2 py-2 flex flex-wrap ">
      {videos.map((video) => (
        <Link key={video.id} to={"/search?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
