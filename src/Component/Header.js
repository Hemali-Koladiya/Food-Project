import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header_component bg-neutral-50">
      <div className="container mx-auto py-4 px-4 lg:px-6 2xl:px-20">
        <nav className="flex flex-wrap justify-between items-center">
          <div className="logo_box">
            <h2 className="text-xl font-semibold" style={{ color: "#ff4a22" }}>
              Ramen<span className="font-normal text-black">.kuy</span>
            </h2>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-black hover:text-orange-600 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          <div
            className={`w-full lg:flex lg:items-center lg:w-auto gap-11 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="lg:flex lg:gap-11 mt-4 lg:mt-0">
              <li className="block mt-4 lg:inline-block lg:mt-0">
                <NavLink
                  href="#"
                  className="text-black font-medium text-sm active:text-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0">
                <NavLink
                  href="#"
                  className="text-black font-medium text-sm active:text-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  How to Order
                </NavLink>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0">
                <NavLink
                  href="#"
                  className="text-black font-medium text-sm active:text-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Our Menu
                </NavLink>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0">
                <NavLink
                  href="#"
                  className="text-black font-medium text-sm active:text-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Our Recipes
                </NavLink>
              </li>
              <li className="block mt-4 lg:inline-block lg:mt-0">
                <NavLink
                  href="#"
                  className="text-black font-medium text-sm active:text-orange-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="mt-4 lg:mt-0 font-medium text-sm text-orange-600 border-2 rounded-full px-5 py-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
