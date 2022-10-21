import React from "react";
import ex from "../assests/ex.svg";

const Analytics = () => {
  const buttB = {
    backgroundColor: "#000814",
    color: "#ffc300",
  };
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="lg:w-[16rem] md:w-[16rem] s:w-[16rem] mx-auto my-4"
          src={ex}
          alt="A SVG file"
        />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#ffc300] font-bold">
            Global Movement & Trackking
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
            Why you Should Choose Us.
          </h1>
          <p className="text-justify">
            Empowered by our proprietary blockchain technology, Export
            prioritizes security, transparency, cost-effectiveness, and
            ease-of-use. Our partners can confidently trade, network, and
            communicate with other verified companies and experts from all over
            the world. With Export Portal, SMEs have an exponential growth
            opportunity – not just geographically, but within their verticals as
            well.
          </p>
          <button
            style={buttB}
            className=" w-[150px] rounded-md py-4 mx-auto md:mx-0 font-bold my-6"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
