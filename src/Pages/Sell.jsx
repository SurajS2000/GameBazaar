import React, { useState } from "react";
import AddPhoto from "../Component/AddPhoto";

const Sell = () => {
  const [image,addimage] = useState([])
  return (
    <div>
      <div className="w-full p-5 text-2xl flex items-center shadow-md">
        <i className="fa-solid fa-xmark"></i>
        <div className="w-full text-center">
          <span className="font-bold">Sell Game Account</span>
        </div>
      </div>
      <div className="w-full m-10 p-5 flex justify-center">
        <div className="border-2 w-10/12 rounded p-5">
          <span className="text-2xl font-semibold">Enter Details</span>
          <form className="mt-3 flex flex-col gap-3" action="">
            <div className="flex flex-col">
              <label htmlFor="">Game</label>
              <input
                className="p-2 border-2 outline-cyan-500 border-gray-700 rounded"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Username</label>
              <input
                className="p-2 border-2 outline-cyan-500 border-gray-700 rounded"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Level</label>
              <input
                className="p-2 border-2 outline-cyan-500 border-gray-700 rounded"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Achivements</label>
              <input
                className="p-2 border-2 outline-cyan-500 border-gray-700 rounded"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Asking Price</label>
              <input
                className="p-2 border-2 outline-cyan-500 border-gray-700 rounded"
                type="number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Discription</label>
              <textarea
                className="p-2 border-2 outline-cyan-500 border-gray-700 rounded"
                name=""
                id=""
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <span>Upload Images</span>
              <label htmlFor="imagefile">
                <div className="flex flex-wrap gap-2 justify-center border-2 border-gray-700 rounded p-5">
                  <AddPhoto/>
                  <input
                    id="imagefile"
                    className="hidden"
                    type="file"
                    name="files[]"
                    multiple
                    accept="image/png,image/gif,image/jpeg"
                  />
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
