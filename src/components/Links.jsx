import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import LinkHeader from "./LinkHeader";
import LinkSection from "./LinkSection";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const Links = () => {
  const { loading, error } = useSelector((state) => state.user);

  return (
    <div className="max-sm:px-5 pl-20 py-5 w-full">
      <div className="poppins font-semibold text-xl flex max-lg:justify-center">
        Movies
      </div>
      <div className="justify-center max-lg:inline hidden"><SearchBar/></div>
      <div>
        <button
          disabled={loading}
          className="bg-[#6A82FF] w-60 max-lg:w-full text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4] my-8"
        >
          <div className="flex justify-between">
            <div className="poppins text-base font-semibold">
              {loading ? "Loading..." : "Create Link"}
            </div>
            <div className="flex justify-center items-center">
              <AiOutlinePlus />
            </div>
          </div>
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-5">
      <div>
        <LinkHeader />
      </div>
      <div>
        <LinkSection />
      </div>
    </div>
    </div>
  );
};

export default Links;
