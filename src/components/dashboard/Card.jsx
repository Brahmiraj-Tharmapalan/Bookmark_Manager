import React, { useEffect, useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import movieIcon from "../../../public/movie.svg";
import songIcon from "../../../public/song.svg";
import bookIcon from "../../../public/book.svg";
import documentIcon from "../../../public/document.svg";
import savingIcon from "../../../public/saving.svg";
import jobsIcon from "../../../public/job.svg";

const Card = ({ icon, name, onDelete, onFav, fav, onLinkNavigate }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleDeleteOption = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsDeleteOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div className="pl-8 max-xl:pl-4 cursor-pointer" onClick={onLinkNavigate}>
        <div>
          <img src={iconImage} alt={name} />
        </div>
        <div className="flex justify-center items-center">{name}</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="relative">
          <BsThreeDots
            onClick={toggleDeleteOption}
            className="cursor-pointer"
          />
          {isDeleteOpen && (
            <div className="absolute top-0 right-0 mt-2 mr-2">
              <div
                className="bg-white p-2 rounded-lg border shadow-md cursor-pointer"
                ref={modalRef}
                onClick={onDelete}
              >
                <span>Delete</span>
              </div>
            </div>
          )}
        </div>
        <AiFillHeart
          className={`${
            fav ? "fill-red-400" : "fill-[#6A82FF2E]"
          } cursor-pointer`}
          onClick={onFav}
        />
      </div>
    </div>
  );
};

export default Card;
