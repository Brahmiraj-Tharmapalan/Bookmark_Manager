import React, { useState, useEffect, useRef } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import LinkIcon from "./LinkIcon";

const LinkCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = (event) => {
    const iconPosition = event.currentTarget.getBoundingClientRect();

    const top = iconPosition.bottom + window.scrollY + 10;
    const left = iconPosition.left + window.scrollX;

    setModalPosition({ top, left });
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
        <p className="poppins text-base font-semibold text-[#30387D] max-xl:hidden">
          Link Name Goes Here
        </p>
        <p className="poppins text-sm font-semibold text-[#30387D] max-xl:inline hidden">
          Link Name
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center poppins text-base font-semibold text-[#30387D]">
        <div className="max-xl:truncate w-full max-lg:w-96 max-sm:w-32 poppins max-xl:text-sm text-base font-semibold text-[#30387D]">
          https://www.google.com/search?q=react+icon&oq=react&aqs=chrome.0.69i59l3j69i57j69i59l2j69i64j0i433i512.
        </div>
      </div>
      <div className="hidden max-xl:inline py-3">
        <BsThreeDotsVertical onClick={openModal} className="cursor-pointer" />
      </div>
      <div className="p-2 max-xl:hidden max-xl:py-10 flex justify-center items-center">
        <LinkIcon />
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg" ref={modalRef}>
            <LinkIcon closeModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkCard;
