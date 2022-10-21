import React from "react";
import {
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const Cards = () => {
  const buttY = {
    backgroundColor: "#ffc300",
    color: "#000814",
  };
  const buttB = {
    backgroundColor: "#000814",
    color: "#ffc300",
  };
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="w-20 mx-auto mt-[-3rem] bg-white">
            <AiOutlineUserAdd size={50} className="text-[#ffc300] mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$80</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button
            style={buttY}
            className="w-[200px] rounded-md py-4 mx-auto font-bold my-6 px-6"
          >
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-12 rounded-lg hover:scale-105 duration-300">
          <div className="w-20 mx-auto mt-[-3rem] bg-transparent">
            <AiOutlineUserSwitch size={50} className="text-[#000814] mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$169</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 5GB</p>
          </div>
          <button
            style={buttB}
            className="w-[200px] rounded-md py-4 mx-auto font-bold my-6 px-6"
          >
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="w-20 mx-auto mt-[-3rem] bg-white">
            <AiOutlineUsergroupAdd
              size={50}
              className="text-[#ffc300] mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">Multiple Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 10GB</p>
          </div>
          <button
            style={buttY}
            className="w-[200px] rounded-md py-4 mx-auto font-bold my-6 px-6"
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
