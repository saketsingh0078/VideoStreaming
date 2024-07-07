import React from "react";

const Button = ({ btnName }) => {
  return (
    <div className=" text-nowrap mr-3">
      <button className="px-2 py-1 border-2 border-black rounded-md ">
        {btnName}
      </button>
    </div>
  );
};

export default Button;