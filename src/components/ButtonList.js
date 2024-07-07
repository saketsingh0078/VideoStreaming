import React from "react";
import Button from "./Button";

const btnNames = [
  "All",
  "Music",
  "Live",
  "Arjit Singh",
  "T-series",
  "Movie musicals",
  "Mikes",
  "Indian pop music",
  "Thrillers",
  "Sound Recording",
  "Reverberation",
  "Gaming",
];

const ButtonList = () => {
  return (
    <div className="py-3 px-3 flex ">
      {btnNames.map((btnNames) => (
        <Button key={btnNames} btnName={btnNames} />
      ))}
    </div>
  );
};

export default ButtonList;
