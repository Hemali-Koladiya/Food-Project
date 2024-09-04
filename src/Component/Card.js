import React from "react";
import { FaStar } from "react-icons/fa6";

const Card = (props) => {
  return (
    <>
      <div className="border shadow-lg shadow-gray-200 rounded-2xl">
        <img
          src={props.img}
          alt="product 1"
          style={{ width: "100%" }}
          className="rounded-t-2xl xl:h-72 h-60"
        />
        <div className="detail_box md:p-5 p-4 md:pb-6 pb-5">
          <h3 className="xl:text-lg text-base font-medium mb-1">
            {props.name}
          </h3>
          <div className="price_box flex gap-3 items-center mb-1">
            <p
              className="xl:text-xl text-lg font-semibold"
              style={{ color: "#FF4A22" }}
            >
              ${props.price}
            </p>
            <p
              className="xl:text-sm text-xs font-normal"
              style={{ color: "#33333366" }}
            >
              {props.order} ordered
            </p>
          </div>
          <div className="rate_box flex justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="text-sm font-medium"
                style={{ color: "#333333CC" }}
              >
                4.5
              </span>
              <span className="flex">
                <FaStar color="#EEA10C" size={16} />
                <FaStar color="#EEA10C" size={16} />
                <FaStar color="#EEA10C" size={16} />
                <FaStar color="#EEA10C" size={16} />
                <FaStar color="#33333333" size={16} />
              </span>
            </div>
            <button className="py-2.5 px-5 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition ease-in-out shadow-md shadow-orange-600 text-xs font-medium">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
