import React from "react";
import { IoNotifications } from "react-icons/io5";
import avatar from "../../public/avatar.png";
import { RiLogoutCircleLine } from 'react-icons/ri';

const SearchBar = () => {

  return (
    <div className="flex gap-3 pt-14 max-lg:pt-0 max-lg:justify-between">
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="appearance-none border-2 pl-10 rounded-2xl w-full py-2 px-3 hover:placeholder:text-[#30387D] placeholder:italic"
            id="username"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center">
          <IoNotifications className="h-10 w-10 p-1 rounded-full bg-white fill-[#6A82FF] hover:fill-white hover:bg-[#6A82FF]" />
        </div>
        <div className="flex justify-center items-center h-11 w-11 p-1">
          <img src={avatar} alt="avatar" className="rounded-full bg-white" />
        </div>
        <div>
          <div
            className="flex justify-center items-center p-1"
          >
            <RiLogoutCircleLine className="h-9 w-9 p-1 rounded-full bg-white fill-[#6A82FF] hover:fill-white hover:bg-[#6A82FF]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
