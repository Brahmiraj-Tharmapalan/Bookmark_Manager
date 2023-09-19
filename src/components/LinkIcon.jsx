import React from "react";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineContentCopy } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const LinkIcon = () => {
  return (
    <div className="flex gap-3">
      <div className="border-[#7076A6] border-2 rounded-full p-3 flex justify-center items-center">
        <GoShareAndroid className="fill-[#30387D]" />
      </div>
      <div className="border-[#7076A6] border-2 rounded-full p-3 flex justify-center items-center">
        <MdOutlineContentCopy className="fill-[#30387D]" />
      </div>
      <div className="border-[#7076A6] border-2 rounded-full p-3 flex justify-center items-center">
        <FiEdit2 className="fill-[#30387D]" />
      </div>
      <div className="border-[#7076A6] border-2 rounded-full p-3 flex justify-center items-center">
        <RiDeleteBinLine className="fill-[#EB4335]" />
      </div>
    </div>
  );
};

export default LinkIcon;
