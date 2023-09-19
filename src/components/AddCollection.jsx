import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

const AddCollection = () => {
  const [selectedColor, setSelectedColor] = useState("#FF85CE");
  const { loading, error } = useSelector((state) => state.user);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const color = {
    backgroundColor: selectedColor,
  };
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg">
      <div className="text-[#30387D] poppins text-base font-medium pb-5">
        Add Collection
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-[#30387D] poppins"
        >
          Collection Name
        </label>
        <input
          type="text"
          placeholder="Collection name here"
          id="collectionName"
          className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder:italic"
        />
      </div>
      <div className="flex flex-col gap-4 pt-5">
        <label
          htmlFor="color"
          className="block text-xs font-semibold text-[#30387D] poppins"
        >
          Select Icon Color
        </label>
        <div className="relative">
          <div className="absolute right-0 mx-10 inset-y-0 flex items-center">
            <div className={`p-3 px-8 rounded-lg`} style={color}></div>
          </div>
          <select
            id="iconColor"
            className="w-full bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder-italic"
            value={selectedColor}
            placeholder="Select Icon Color here"
            onChange={handleColorChange}
          >
            <option value="#FF85CE">Pink</option>
            <option value="#E16347">Red</option>
            <option value="#52A944">Green</option>
            <option value="#AEA551">Butter</option>
            <option value="#5698B5">Sky-Blue</option>
            <option value="#464993">Dark-Blue</option>
          </select>
        </div>
      </div>
      <div>
        <button
          disabled={loading}
          className="bg-[#6A82FF] w-full text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4] my-8"
        >
          <div className="flex justify-between">
            <div className="poppins text-base font-semibold">
              {loading ? "Loading..." : "Add Collection"}
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

export default AddCollection;
