import React, { useEffect } from "react";
import SearchBar from "../SearchBar";
import Card from "./Card";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollectionFailure,
  getCollectionSuccess,
} from "../../redux/collection/collectionSlice";
import { useNavigate } from "react-router-dom";
import { navigateSection } from "../../redux/links/linkSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.user);
  const Collection = useSelector((state) => state.collection.collections);

  const fetchAllCollection = () => {
    const config = {
      method: "GET",
      url: "https://avantrio-frontend-training.herokuapp.com/api/collections",
      headers: {
        Authorization: `Bearer ${accessToken.currentUser.data.access}`,
      },
    };

    axios(config)
      .then((response) => {
        dispatch(getCollectionSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getCollectionFailure(error.message));
      });
  };

  useEffect(() => {
    fetchAllCollection();
  });

  const deleteCollection = (cardId) => {
    const config = {
      method: "DELETE",
      url: `https://avantrio-frontend-training.herokuapp.com/api/collections/${cardId}/`,
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
  const favCollection = (cardId, name, icon, color) => {
    const data = {
      name: name,
      icon: icon,
      color: color,
      is_favourite: true,
    };

    const config = {
      method: "PUT",
      url: `https://avantrio-frontend-training.herokuapp.com/api/collections/${cardId}/`,
      headers: {
        Authorization: `Bearer ${accessToken.currentUser.data.access}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    axios(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting collection:", error);
      });
  };
  const favCollectionRemove = (cardId, name, icon, color) => {
    const data = {
      name: name,
      icon: icon,
      color: color,
      is_favourite: false,
    };

    const config = {
      method: "PUT",
      url: `https://avantrio-frontend-training.herokuapp.com/api/collections/${cardId}/`,
      headers: {
        Authorization: `Bearer ${accessToken.currentUser.data.access}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    axios(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting collection:", error);
      });
  };

  const onLinkNav = (cardId, cardName, cardIcon, cardFav) => {
    const cardDetail = {
      cardId: cardId,
      cardName: cardName,
      cardIcon: cardIcon,
      cardFav: cardFav,
    };
    dispatch(navigateSection(cardDetail));
    navigate("/section");
  };

  return (
    <div className="max-sm:px-5 px-20 py-4 w-full">
      <div className="poppins font-semibold text-xl flex max-lg:justify-center">
        Home
      </div>
      <div className="justify-center max-lg:inline hidden">
        <SearchBar />
      </div>
      <div>
        <button className="bg-[#6A82FF] w-60 max-lg:w-full text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4] my-8">
          <div className="flex justify-between">
            <div className="poppins text-base font-semibold">Create Folder</div>
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
          {Collection.map(
            (data, index) =>
              data.is_favourite === true && (
                <div key={index}>
                  <Card
                    name={data.name}
                    icon={data.icon}
                    fav={data.is_favourite}
                    onDelete={() => deleteCollection(data.id)}
                    onFav={() =>
                      favCollectionRemove(
                        data.id,
                        data.name,
                        data.icon,
                        data.color,
                        data.is_favourite
                      )
                    }
                    onLinkNavigate={() =>
                      onLinkNav(
                        data.id,
                        data.name,
                        data.icon,
                        data.is_favourite
                      )
                    }
                  />
                </div>
              )
          )}
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
            {Collection.map(
              (data, index) =>
                data.is_favourite === false && (
                  <div key={index}>
                    <Card
                      name={data.name}
                      icon={data.icon}
                      fav={data.is_favourite}
                      onDelete={() => deleteCollection(data.id)}
                      onFav={() =>
                        favCollection(
                          data.id,
                          data.name,
                          data.icon,
                          data.color,
                          data.is_favourite
                        )
                      }
                      onLinkNavigate={() =>
                        onLinkNav(
                          data.id,
                          data.name,
                          data.icon,
                          data.is_favourite
                        )
                      }
                    />
                  </div>
                )
            )}
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
          {Collection.map((data, index) => (
            <div key={index}>
              <Card
                name={data.name}
                icon={data.icon}
                fav={data.is_favourite}
                onDelete={() => deleteCollection(data.id)}
                onFav={() =>
                  favCollection(
                    data.id,
                    data.name,
                    data.icon,
                    data.color,
                    data.is_favourite
                  )
                }
                onLinkNavigate={() =>
                  onLinkNav(data.id, data.name, data.icon, data.is_favourite)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
