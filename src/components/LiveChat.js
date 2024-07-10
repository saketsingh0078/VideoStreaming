import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utility/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utility/helper";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(40),
        })
      );
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full flex flex-col ml-5">
      <div className=" border-2 border-black h-[500px] p-1 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      <form
        className="border-x-2 border-b-2  border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Saket Singh",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="px-3 py-1 m-1 text-lg border-2 w-[85%] border-gray-400 rounded-lg "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 py-2 m-1 border-2 bg-black text-white border-gray-400 rounded-lg ">
          Send
        </button>
      </form>
    </div>
  );
};
