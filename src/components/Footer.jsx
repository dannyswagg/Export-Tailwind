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
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#ffc300]">Export.</h1>
        <p>
          Export is a digital B2B marketplace aiming to be a comprehensive
          international trade hub for Small and Medium - sized Enterprises
          (SMEs) and their counterparts.
        </p>
        <div className="flex text-[#ffc300] my-6 md:w-[75%] justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketting</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Enterprise</h6>
          <ul>
            <li className="py-2 text-sm">Business</li>
            <li className="py-2 text-sm">Alternate</li>
            <li className="py-2 text-sm">Income</li>
            <li className="py-2 text-sm">Multiply</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Pricing</h6>
          <ul>
            <li className="py-2 text-sm">Servicom</li>
            <li className="py-2 text-sm">Telecom</li>
            <li className="py-2 text-sm">Practice</li>
            <li className="py-2 text-sm">Import</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Community</h6>
          <ul>
            <li className="py-2 text-sm">Power</li>
            <li className="py-2 text-sm">Marketting</li>
            <li className="py-2 text-sm">Group</li>
            <li className="py-2 text-sm">Online</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
