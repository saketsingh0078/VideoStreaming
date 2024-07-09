import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  bg-slate-100 items-center shadow-md mb-2">
      <img
        className="w-[2vw] h-[4vh] my-1 mx-2 "
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
      />
      <span className="font-bold mr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
