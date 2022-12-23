import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-5 md:grid-cols-2 gap-4 text-gray-300">
      <div className="lg:col-span-1 md:col-span-2">
        <h1 className="w-full text-3xl font-bold text-[#ffc300]">Export.</h1>
        <p className="text-sm text-justify">
          Export is a digital B2B market aiming to be a comprehensive
          international trade hub for Small and Medium - sized Enterprises
          (SMEs) and their counterparts.
        </p>
        <p className="flex text-[#ffc300] my-6 justify-between">
          <FaFacebookSquare size={25} />
          <FaInstagram size={25} />
          <FaGithubSquare size={25} />
          <FaTwitterSquare size={25} />
          <FaDribbbleSquare size={25} />
        </p>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-[#ffc300] uppercase">Solutions</h1>
        <ul className="py-4">
          <li>Analytics</li>
          <li>Marketting</li>
          <li>Commerce</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-[#ffc300] uppercase">Pricing</h1>
        <ul className="py-4">
          <li>Business</li>
          <li>Alternate</li>
          <li>Income</li>
          <li>Multiply</li>
        </ul>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-[#ffc300] uppercase">Community</h1>
        <ul className="py-4">
          <li>Servicom</li>
          <li>Telecom</li>
          <li>Practice</li>
          <li>Import</li>
        </ul>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-[#ffc300] uppercase">Enterprise</h1>
        <ul className="py-4">
          <li>Power</li>
          <li>Market</li>
          <li>Group</li>
          <li>Online</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
