import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="container md:py-28 py-20 w-full mx-auto">
        <div
          className="subscribe_box xl:w-1/3 md:w-1/2 w-full mx-auto  py-9 px-9 rounded-xl text-center"
          style={{ backgroundColor: "#33333340" }}
        >
          <p className="text-white text-base font-normal">
            Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus
            vitae aliquet nec ullamcorper sit.
          </p>
          <button className="py-2.5 px-5 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition ease-in-out text-xs font-medium mt-8">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
