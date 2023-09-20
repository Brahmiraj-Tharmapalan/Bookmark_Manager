import React, { useState } from "react";
import HomeSidebar from "../components/HomeSidebar";
import Home from "../components/Home";
import tick from "../../public/tick.svg";
import emoji from "../../public/Emoji.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCollectionFailure } from "../redux/collection/collectionSlice";

const Dashboard = () => {
  const { loadingModal } = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(addCollectionFailure());
  };

  return (
    <div className="flex flex-1 max-lg:flex-col">
      <div className="flex-auto">
        <Home />
      </div>
      <div className="flex top-0 right-0 h-full p-10">
        <HomeSidebar />
      </div>
      {loadingModal && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 max-lg:p-2">
          <div className="max-h-full w-full max-w-xl overflow-y-auto rounded-2xl bg-white">
            <div className="w-full">
              <div className="m-8 my-10 max-w-[400px] mx-auto">
                <div className="flex justify-center items-center pb-10">
                  <img src={tick} alt="" />
                </div>
                <div className="">
                  <p className="text-2xl font-semibold poppins text-center max-lg:px-5">
                    Successfully Created the Collection
                  </p>
                </div>
                <div className="flex justify-center items-center py-5">
                  <img src={emoji} alt="" />
                </div>
                <div className="space-y-4 max-lg:px-16">
                  <button
                    className="p-3 bg-[#6A82FF] rounded-xl text-white w-full font-semibold"
                    onClick={toggleModal}
                  >
                    Awsome
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
