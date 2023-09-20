import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import movie from "../../public/movie.svg";

const LinkHeader = () => {
  return (
    <div className="flex gap-5">
      <div>
        <img src={movie} alt="" />
      </div>
      <div className="flex flex-col justify-between py-3">
        <div>Movies</div>
        <div>
          <AiFillHeart />
        </div>
      </div>
    </div>
  );
};

export default LinkHeader;
