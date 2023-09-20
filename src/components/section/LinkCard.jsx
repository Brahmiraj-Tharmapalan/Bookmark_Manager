import React, { useState, useEffect, useRef } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import LinkIcon from "./LinkIcon";

const LinkCard = ({ LinkName, LinkURL, getLinkId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-1 border-2 rounded-md flex justify-between gap-5 my-3">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <BsLink45Deg className="fill-[#30387D]" />
        </div>
        <p className="poppins text-base font-semibold text-[#30387D]">
          {LinkName}
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center poppins text-base font-semibold text-[#30387D]">
        <div className="max-xl:truncate w-full max-lg:w-96 max-sm:w-32 poppins max-xl:text-sm text-base font-semibold text-[#30387D]">
          {LinkURL}
        </div>
      </div>
      <div className="hidden max-xl:inline py-3">
        <BsThreeDotsVertical onClick={openModal} className="cursor-pointer" />
      </div>
      <div
        className="p-2 max-xl:hidden max-xl:py-10 flex justify-center items-center cursor-pointer"
        onClick={getLinkId}
      >
        <LinkIcon />
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center" onClick={getLinkId}>
          <div className="bg-white p-6 rounded-lg shadow-lg" ref={modalRef}>
            <LinkIcon closeModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkCard;
