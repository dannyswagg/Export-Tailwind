import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const buttY = {
    backgroundColor: "#ffc300",
    color: "#000814",
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setNav(false)}>
      <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#ffc300] cursor-pointer">
          Export.
        </h1>
        <ul className="hidden md:flex uppercase font-medium cursor-pointer">
          <li className="p-4 hover:text-[#ffc300]">Company</li>
          <li className="p-4 hover:text-[#ffc300]">Resource</li>
          <li className="p-4 hover:text-[#ffc300]">About</li>
          <li className="p-4 hover:text-[#ffc300]">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="text-[#ffc300]" />
          ) : (
            <GiHamburgerMenu size={20} className="text-[#ffc300]" />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] border-r border-r-gray-900 h-full bg-[#000814] ease-in-out duration-300"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#ffc300] m-4">
            Export.
          </h1>
          <ul className="pt-12 uppercase p-4">
            <li className="p-4 border-b border-gray-600 hover:text-[#ffc300]">
              Home
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-[#ffc300]">
              Company
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-[#ffc300]">
              Resource
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-[#ffc300]">
              About
            </li>
            <li className="p-4 hover:text-[#ffc300] border-b border-gray-600">
              Contact
            </li>
            <li className="p-4">
              <button
                style={buttY}
                className="w-[200px] rounded-md py-3 mx-auto font-bold my-6"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Navbar;
