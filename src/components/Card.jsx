import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import video from "../../public/video.svg";

const Card = () => {
  return (
    <div className="bg-white p-3 rounded-2xl flex px-5 w-48 max-xl:w-40 justify-between">
      <div className="pl-8 max-xl:pl-4">
        <div>
          <img src={video} alt="video" />
        </div>
        <div className="flex justify-center items-center">Movie</div>
      </div>
      <div className="flex flex-col justify-between">
        <BsThreeDots />
        <AiFillHeart />
      </div>
    </div>
  );
};

export default Card;
