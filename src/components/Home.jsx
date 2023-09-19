import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";
import SearchBar from "./SearchBar";

const Home = () => {
  const { loading, error } = useSelector((state) => state.user);

  return (
    <div className="max-sm:px-5 px-20 py-4 w-full">
      <div className="poppins font-semibold text-xl flex max-lg:justify-center">
        Home
      </div>
      <div className="justify-center max-lg:inline hidden"><SearchBar/></div>
      <div>
        <button
          disabled={loading}
          className="bg-[#6A82FF] w-60 max-lg:w-full text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4] my-8"
        >
          <div className="flex justify-between">
            <div className="poppins text-base font-semibold">
              {loading ? "Loading..." : "Create Folder"}
            </div>
            <div className="flex justify-center items-center">
              <AiOutlinePlus />
            </div>
          </div>
        </button>
      </div>
      <div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-start items-center text-base">
            <span className="bg-[#f0f0f0] px-2 text-gray-500">
              <h2 className="poppins text-xl font-semibold text-[#30387D]">
                My Favorite
              </h2>
            </span>
          </div>
        </div>
        <div className="grid max-md:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-16 max-md:gap-5 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-start items-center text-base">
              <span className="bg-[#f0f0f0] px-2 text-gray-500">
                <h2 className="poppins text-xl font-semibold text-[#30387D] py-10">
                  Recent Collections
                </h2>
              </span>
            </div>
          </div>
          <div className="grid max-md:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-16 max-md:gap-5 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-start items-center text-base">
              <span className="bg-[#f0f0f0] px-2 text-gray-500">
                <h2 className="poppins text-xl font-semibold text-[#30387D] py-10">
                  All Collections
                </h2>
              </span>
            </div>
          </div>
        </div>
        <div className="grid max-md:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-16 max-md:gap-5 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
