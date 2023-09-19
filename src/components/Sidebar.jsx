import React from "react";
import AddCollection from "./AddCollection";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div>
      <SearchBar />
      <AddCollection />
      <div> cardcomponent</div>
    </div>
  );
};

export default Sidebar;
