import React from "react";

const NewsLetter = () => {
  const buttY = {
    backgroundColor: "#ffc300",
    color: "#000814",
  };
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want Tips & Tricks On How To Optimize <br />
            Our Services?
          </h1>
          <p>Sign Up To Our Newsletter to Stay Up-To-Date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="text-[#000814] p-3 flex w-full rounded-md"
              type="email"
              placeholder="Enter Email"
            />
            <button
              style={buttY}
              className="w-[200px] rounded-md py-4 mx-auto font-bold ml-4 my-6 px-6 "
            >
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read about our here
            <span className="text-[#ffc300] pl-2">privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
