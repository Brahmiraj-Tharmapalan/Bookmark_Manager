import React from "react";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineContentCopy } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";

const LinkIcon = () => {
  const accessToken = useSelector((state) => state.user);
  const cardId = useSelector((state) => state.link.cardDetail.cardId);
  const linkId = useSelector((state) => state.link.LinkDetails.linkId);
  console.log(cardId);
  console.log(linkId);

  const deleteCollection = () => {
    const config = {
      method: "DELETE",
      url: `https://avantrio-frontend-training.herokuapp.com/api/collections/${cardId}/links/${linkId}/`,
      headers: {
        Authorization: `Bearer ${accessToken.currentUser.data.access}`,
      },
    };

    axios(config)
      .then((response) => {})
      .catch((error) => {
        console.error("Error deleting collection:", error);
      });
  };
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
        <RiDeleteBinLine
          className="fill-[#EB4335]"
          onClick={deleteCollection}
        />
      </div>
    </div>
  );
};

export default LinkIcon;
