import React from "react";
import Typed from "react-typed";

const Hero = () => {
  const buttY = {
    backgroundColor: "#ffc300",
    color: "#000814",
  };

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[5px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#ffc300] font-bold p-1 uppercase">
          The #1 Choice In The Export Business.
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-2">
          Worldwide Reach.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2">
            Safe, Fast, Strong, Realiable in <br />
            <Typed
              className="text-[#ffc300] font-bold uppercase py-2 pl-2 md:text-3xl sm:text-2xl text-xl"
              strings={[
                "Import.",
                "Export.",
                "Transfer.",
                "Delivery.",
                "Logistics.",
              ]}
              typeSpeed={120}
              backSpeed={130}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl py-2 text-xl font-bold text-gray-600">
          Track and monitor your goods anywhere in the world on our platform.
        </p>
        <button
          style={buttY}
          className="w-[200px] rounded-md py-3 mx-auto font-bold my-6"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
