import React, { useEffect } from "react";
import LinkCard from "./LinkCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getLinkId,
  getLinksFailure,
  getLinksSuccess,
} from "../../redux/links/linkSlice";

const LinkSection = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user);
  const cardId = useSelector((state) => state.link.cardDetail.cardId);
  const Links = useSelector((state) => state.link.links);

  const fetchAllCollection = () => {
    const config = {
      method: "GET",
      url: `https://avantrio-frontend-training.herokuapp.com/api/collections/${cardId}/links`,
      headers: {
        Authorization: `Bearer ${accessToken.currentUser.data.access}`,
      },
    };

    axios(config)
      .then((response) => {
        dispatch(getLinksSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getLinksFailure(error.message));
      });
  };

  useEffect(() => {
    fetchAllCollection();
  });
  //need rerender

  const getLinkDetail = (LinkId, LinkName, LinkURL) => {
    const linkDetails = {
      linkId: LinkId,
      linkName: LinkName,
      linkURl: LinkURL,
    };
    dispatch(getLinkId(linkDetails));
  };
  return (
    <div className="h-96 overflow-y-auto scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar-thin pr-2">
      {Links.map((Link, index) => (
        <div key={index}>
          <LinkCard
            LinkName={Link.name}
            LinkURL={Link.url}
            getLinkId={() => getLinkDetail(Link.id, Link.name, Link.url)}
          />
        </div>
      ))}
    </div>
  );
};

export default LinkSection;
