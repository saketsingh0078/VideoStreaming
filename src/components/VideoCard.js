import React from "react";

export const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col w-[19vw] h-[50vh] rounded-lg shadow-md p-2 mr-4 mb-3">
      <div>
        <img
          className=" bg-cover w-[19vw] h-[28vh] rounded-lg object-cover"
          src={thumbnails.high.url}
          alt="thumbnails"
        />
      </div>
      <div className="flex">
        <img
          className="w-[2vw] h-[3vh] my-1 "
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
        />
        <div className="flex flex-col mx-1">
          <h1 className="font-semibold">{title}</h1>
          <h3 className="">
            {channelTitle}
            <span className="text-sm">✔️</span>
          </h3>
          <h3>{statistics.viewCount} views</h3>
        </div>
      </div>
    </div>
  );
};
