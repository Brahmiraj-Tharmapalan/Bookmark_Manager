import React from "react";
import AddCollection from "./AddCollection";
import SearchBar from "./SearchBar";

const HomeSidebar = () => {
  return (
    <div className="max-lg:w-full">
      <div className="max-lg:hidden">
        <SearchBar />
      </div>
      <div className="pt-5">
        <AddCollection />
      </div>
    </div>
  );
};

export default HomeSidebar;
