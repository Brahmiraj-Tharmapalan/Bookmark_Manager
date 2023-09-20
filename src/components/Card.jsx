import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import movieIcon from "../../public/movie.svg";
import songIcon from "../../public/song.svg";
import bookIcon from "../../public/book.svg";
import documentIcon from "../../public/document.svg";
import savingIcon from "../../public/saving.svg";
import jobsIcon from "../../public/job.svg";

const Card = ({ icon, name }) => {
  const [Favourite, setFavourite] = useState(false);
  const handleFavClick = () => {
    setFavourite(!Favourite)
  }
  const iconList = {
    movie: movieIcon,
    song: songIcon,
    book: bookIcon,
    document: documentIcon,
    financial: savingIcon,
    business: jobsIcon,
  };
  const iconImage = iconList[icon];

  return (
    <div className="bg-white p-3 rounded-2xl flex px-5 w-48 max-xl:w-40 justify-between">
      <div className="pl-8 max-xl:pl-4">
        <div>
          <img src={iconImage} alt={name} />
        </div>
        <div className="flex justify-center items-center">{name}</div>
      </div>
      <div className="flex flex-col justify-between">
        <BsThreeDots />
        <AiFillHeart className={`${Favourite ? "fill-red-400" : "fill-[#6A82FF2E]"} cursor-pointer`} onClick={handleFavClick}/>
      </div>
    </div>
  );
};

export default Card;
