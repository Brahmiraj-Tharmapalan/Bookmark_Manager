import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import {
  addCollectionStart,
  addCollectionSuccess,
  addCollectionFailure,
} from "../../redux/collection/collectionSlice.js";

const AddCollection = () => {
  const [selectedColor, setSelectedColor] = useState("#FF85CE");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const accessToken = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.collection);

  const { loadingModal } = useSelector((state) => state.collection);

  const iconList = {
    "#FF85CE": "movie",
    "#E16347": "song",
    "#52A944": "book",
    "#AEA551": "document",
    "#5698B5": "financial",
    "#464993": "business",
  };

  const icon = iconList[selectedColor];

  const handleCreateCollection = (e) => {
    e.preventDefault();

    const collectionData = {
      name: formData.collectionName,
      icon: icon,
      color: selectedColor,
    };

    dispatch(addCollectionStart());

    const config = {
      method: "POST",
      url: "https://avantrio-frontend-training.herokuapp.com/api/collections/",
      headers: {
        Authorization: `Bearer ${accessToken.currentUser.data.access}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(collectionData),
    };

    axios(config)
      .then((response) => {
        dispatch(addCollectionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addCollectionFailure(error.message));
      });
  };

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
      <form onSubmit={handleCreateCollection}>
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
            onChange={handleChange}
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
              <option value="#FF85CE">Pink - movie</option>
              <option value="#E16347">Red - song</option>
              <option value="#52A944">Green - book</option>
              <option value="#AEA551">Butter - document</option>
              <option value="#5698B5">Sky-Blue - financial</option>
              <option value="#464993">Dark-Blue - business</option>
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
      </form>
    </div>
  );
};

export default AddCollection;
