import React from "react";
import { AiFillHeart } from "react-icons/ai";
import movieIcon from "../../../public/movie.svg";
import songIcon from "../../../public/song.svg";
import bookIcon from "../../../public/book.svg";
import documentIcon from "../../../public/document.svg";
import savingIcon from "../../../public/saving.svg";
import jobsIcon from "../../../public/job.svg";
import { useSelector } from "react-redux";

const LinkHeader = () => {
  const cardDetail = useSelector((state) => state.link.cardDetail);

  const iconList = {
    movie: movieIcon,
    song: songIcon,
    book: bookIcon,
    document: documentIcon,
    financial: savingIcon,
    business: jobsIcon,
  };
  const iconImage = iconList[cardDetail.cardIcon];

  return (
    <div className="flex gap-5">
      <div>
        <img src={iconImage} alt="" />
      </div>
      <div className="flex flex-col justify-between py-3">
        <div>{cardDetail.cardName}</div>
        <div>
          <AiFillHeart
            className={`${
              cardDetail.cardFav ? "fill-red-400" : "fill-[#6A82FF2E]"
            } cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkHeader;
