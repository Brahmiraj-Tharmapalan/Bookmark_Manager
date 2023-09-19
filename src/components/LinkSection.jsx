import React from "react";
import LinkCard from "./LinkCard";

const LinkSection = () => {
  return (
    <div className="h-96 overflow-y-auto scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar-thin pr-2">
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
        <LinkCard/>
    </div>
  );
};

export default LinkSection;
