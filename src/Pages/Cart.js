import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import cartP1 from "../Images/cartp1.png";
import cartP2 from "../Images/cartp2.png";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart_page">
        <section>
          <div className="container mx-auto 2xl:px-20 lg:px-6 px-4 lg:my-16 md:my-12 my-8">
            <nav>
              <ul
                className="flex gap-1 xl:text-lg md:text-base text-sm font-medium"
                style={{ color: "#98A2B3" }}
              >
                <li>Category </li>
                <li> / </li>
                <li>Supplements </li>
                <li> / </li>
                <li style={{ color: "#FF4A22" }}> Vitamin c</li>
              </ul>
            </nav>
            <div className="overflow-x-auto mt-8">
              <table
                className="min-w-full bg-white border-separate"
                style={{ borderSpacing: "0 25px" }}
              >
                <thead className="">
                  <tr className="shadow-md  shadow-slate-200  rounded-md">
                    <th className="px-6 py-4 w-4/12 text-left text-base font-normal">
                      Product
                    </th>
                    <th className="px-6 py-4 w-3/12 text-left text-base font-normal">
                      Price
                    </th>
                    <th className="px-6 py-4 w-3/12 text-left text-base font-normal">
                      Quantity
                    </th>
                    <th className="px-6 py-4 w-2/12 text-left text-base font-normal">
                      Subtotal
                    </th>
                    <th className="px-6 py-4 w-1/12 text-left text-base font-normal"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="shadow-md  shadow-slate-200  rounded-md">
                    <td className="px-6 py-4 ">
                      <div className="flex gap-4 items-center w-60">
                        <img
                          src={cartP1}
                          alt="product"
                          className="w-14 h-14 object-none"
                        />
                        <span className="text-base font-normal">
                          LCD Monitor quis.
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-base font-normal">$650</td>
                    <td className="px-6 py-4">
                      <div className="border-2 border-slate-300 w-16 px-2 py-0.5 rounded flex justify-between items-center">
                        <p className="text-base font-normal">01</p>
                        <div className="flex flex-col">
                          <button className="hover:border">
                            <MdKeyboardArrowUp />
                          </button>
                          <button className="hover:border">
                            <MdKeyboardArrowDown />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-base font-normal">$650</td>
                    <td className="px-6 py-4 ">
                      <div className="flex justify-center items-center cursor-pointer">
                        <RiDeleteBin5Line size={22} color="#DB4444" />
                      </div>
                    </td>
                  </tr>
                  <tr className="shadow-md  shadow-slate-200  rounded-md">
                    <td className="px-6 py-4 ">
                      <div className="flex gap-4 items-center w-60">
                        <img
                          src={cartP2}
                          alt="product"
                          className="w-14 h-14 object-none"
                        />
                        <span className="text-base font-normal">
                          H1 Gamepad
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-base font-normal">$550</td>
                    <td className="px-6 py-4">
                      <div className="border-2 border-slate-300 w-16 px-2 py-0.5 rounded flex justify-between items-center">
                        <p className="text-base font-normal">02</p>
                        <div className="flex flex-col">
                          <button className="hover:border">
                            <MdKeyboardArrowUp />
                          </button>
                          <button className="hover:border">
                            <MdKeyboardArrowDown />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-base font-normal">$1100</td>
                    <td className="px-6 py-4 ">
                      <div className="flex justify-center items-center cursor-pointer">
                        <RiDeleteBin5Line size={22} color="#DB4444" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="total flex justify-end">
              <div className="border xl:w-4/12 lg:w-5/12 md:w-6/12 w-full mt-12 md:px-8 py-5 px-5 shadow-md shadow-gray-200 rounded-lg mb-10">
                <h3 className="text-2xl font-medium">Cart Total</h3>
                <div className="total-amount mt-6">
                  <div className="sub_total border-b border-slate-300 flex justify-between pb-2">
                    <p className="xl:text-xl text-base font-normal">Subtotal:</p>
                    <p className="xl:text-xl text-base font-normal">$1750</p>
                  </div>
                  <div className="sub_total border-b border-slate-300 flex justify-between pb-2 mt-3">
                    <p className="xl:text-xl text-base font-normal">Shipping:</p>
                    <p className="xl:text-xl text-base font-normal">Free</p>
                  </div>
                  <div className="sub_total  flex justify-between pb-2 mt-4">
                    <p className="xl:text-xl text-base font-semibold">Total:</p>
                    <p className="xl:text-xl text-base font-semibold">$1750</p>
                  </div>
                </div>
                <div className="text-center mt-7">
                  <button className="border border-orange-600 py-1.5 px-10 rounded-full bg-orange-600 text-white  hover:bg-orange-700 transition ease-in-out mb-3 xl:text-base md:text-sm text-xs font-medium">
                    Procees to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>  
      </div>
      <Footer />
    </>
  );
};

export default Cart;
