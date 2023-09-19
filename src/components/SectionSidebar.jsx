import React from "react";
import SearchBar from "./SearchBar";
import AddLink from "./AddLink";

const SectionSidebar = () => {
  return (
    <div className="max-lg:w-full">
      <div className="max-lg:hidden">
        <SearchBar/>
      </div>
      <div className="pt-5">
        <AddLink />
      </div>
    </div>
  );
};

export default SectionSidebar;
