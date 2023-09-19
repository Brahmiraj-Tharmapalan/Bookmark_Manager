import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

const AddLink = () => {
  const { loading, error } = useSelector((state) => state.user);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg">
      <div className="text-[#30387D] poppins text-base font-medium pb-5">
        Add Link
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-[#30387D] poppins"
        >
          Link Name
        </label>
        <input
          type="text"
          placeholder="Link name here"
          id="collectionName"
          className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder:italic"
        />
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-[#30387D] poppins"
        >
          URL
        </label>
        <input
          type="text"
          placeholder="Link URL here"
          id="collectionName"
          className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder:italic"
        />
      </div>
      <div>
        <button
          disabled={loading}
          className="bg-[#6A82FF] w-full text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4] my-8"
        >
          <div className="flex justify-between">
            <div className="poppins text-base font-semibold">
              {loading ? "Loading..." : "Add Link"}
            </div>
            <div className="flex justify-center items-center">
              <AiOutlinePlus />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddLink;
