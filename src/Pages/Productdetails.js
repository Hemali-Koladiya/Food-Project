import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import vitaminc from "../Images/vitaminC.png";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { NextArrows, PrevArrows } from "../Component/Arrows";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import orange from "../Images/orange.png";
import berry from "../Images/berry.png";
import lamon from "../Images/lamon.png";
import { BsHeart } from "react-icons/bs";
import Accordian from "./Accordian";
import "../Style/Style.css";
import { HiMinus } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import Card from "../Component/Card";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import Subscribe from "../Component/Subscribe";
import subsribeback from "../Images/subscribe.png";

const Productdetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const images = [vitaminc, vitaminc, vitaminc, vitaminc];

  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Details" },
    { id: "packaging", label: "Packaging" },
    { id: "shipping", label: "Shipping details" },
  ];

  const content = {
    details: [
      {
        title: "KEY FEATURES",
        content: "This section provides details about the key features.",
      },
      {
        title: "INGREDIENTS",
        content: "This section provides details about the key features.",
      },
      {
        title: "HOW TO USE",
        content:
          "Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.",
      },
      {
        title: "QUALITY",
        content: "This section provides details about the key features.",
      },
    ],
    packaging: [
      {
        title: "Packaging",
        content: "This section provides details about the key features.",
      },
      {
        title: "INGREDIENTS",
        content: "This section provides details about the key features.",
      },
      {
        title: "HOW TO USE",
        content:
          "Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.",
      },
      {
        title: "QUALITY",
        content: "This section provides details about the key features.",
      },
    ],
    shipping: [
      {
        title: "Shipping Details",
        content: "This section provides details about the key features.",
      },
      {
        title: "INGREDIENTS",
        content: "This section provides details about the key features.",
      },
      {
        title: "HOW TO USE",
        content:
          "Using vitamin C supplements effectively involves understanding the appropriate dosage, the form that best suits your needs, and the timing of intake. Here are some guidelines.",
      },
      {
        title: "QUALITY",
        content: "This section provides details about the key features.",
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="productdetail_page">
        <section>
          <div className="container mx-auto px-4 lg:px-6 2xl:px-20 py-16">
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
            <div className="product_detail mt-6 flex lg:flex-row flex-col gap-8">
              <div className="lg:w-1/2 w-full  py-2">
                <div className="w-11/12 mx-auto product-image">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => (sliderRef1 = slider)}
                  >
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="image_box bg-orange-100/50 p-12 rounded-xl overflow-hidden"
                      >
                        <img
                          src={img}
                          alt="vitamin C"
                          className="md:h-72 h-64 object-fit mx-auto"
                        />
                      </div>
                    ))}
                  </Slider>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    nextArrow={<NextArrows />}
                    prevArrow={<PrevArrows />}
                  >
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="image_box md:p-3 p-1 overflow-hidden"
                      >
                        <div className="bg-gray-100 py-3 overflow-hidden rounded-xl">
                          <img
                            src={img}
                            alt="vitamin C"
                            className="md:h-24 h-16 object-fit mx-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="lg:w-1/2 w-full ">
                <div className="details">
                  <div>
                    <h3
                      className="xl:text-4xl md:text-3xl text-2xl font-semibold mb-5"
                      style={{ color: "#1D2939" }}
                    >
                      Vitamin C-100ML-Original
                    </h3>
                  </div>
                  <div className="reviews flex items-center gap-3 mb-5">
                    <div className="stars flex gap-0.5">
                      <FaStar size={18} color="#FFB30F" />
                      <FaStar size={18} color="#FFB30F" />
                      <FaStar size={18} color="#FFB30F" />
                      <FaStar size={18} color="#FFB30F" />
                      <FaStarHalfAlt size={18} color="#FFB30F" />
                    </div>
                    <div className="quntity flex lg:text-base text-sm font-semibold divide-x-2 divide-solid divide-slate-200">
                      <p className="pe-4">288 reviews</p>
                      <p className="ps-4">100ml</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-orange-600 font_family xl:text-3xl md:text-2xl text-xl font-semibold mb-4">
                      $40.99
                    </h3>
                  </div>
                  <hr className="border-b" />
                  <div className="product_details mt-5 mb-9">
                    <p
                      className="md:text-base text-sm font-normal"
                      style={{ color: "#1D2939" }}
                    >
                      Vitamin C, also known as ascorbic acid, is a vital
                      nutrient for various bodily functions, including the
                      maintenance of healthy skin, blood vessels, bones, and
                      cartilage. It also helps with wound healing and acts as an
                      antioxidant.
                    </p>
                    <span className="text-base font-medium">
                      <a
                        href="#"
                        className="underline underline-offset-2"
                        style={{ color: "#1A432E" }}
                      >
                        Read more...
                      </a>
                    </span>
                  </div>
                  <hr className="border-b" />
                  <div className="product_flavor flex md:gap-20 gap-3 items-center my-3">
                    <div className="">
                      <h3
                        className="md:text-2xl text-xl font-medium font_family"
                        style={{ color: "#1D2939" }}
                      >
                        Flavour
                      </h3>
                      <p
                        className="font-normal md:text-lg text-base font_family"
                        style={{ color: "#667085" }}
                      >
                        Orange
                      </p>
                    </div>
                    <div className="flex md:gap-5 gap-3">
                      <div className="p-2 border rounded-xl bg-slate-100">
                        <img
                          src={orange}
                          alt="orange"
                          className=" md:w-13 md:h-12 w-10 h-11"
                        />
                      </div>
                      <div className="p-2 border rounded-xl bg-slate-100">
                        <img
                          src={berry}
                          alt="orange"
                          className="md:w-13 md:h-12 w-10 h-11"
                        />
                      </div>
                      <div className="p-2 border rounded-xl bg-slate-100">
                        <img
                          src={lamon}
                          alt="orange"
                          className="md:w-13 md:h-12 w-10 h-11"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="border-b" />
                  <div className="quntity flex md:flex-row flex-col gap-3.5 md:items-center md:my-8 my-5">
                    <div className="flex gap-3.5">
                      <div className="border px-4 py-2 rounded-full bg-gray-100">
                        <select
                          name="cars"
                          id="cars"
                          className="outline-none pe-1 rounded-full bg-gray-100/75 font_family text-base font-medium"
                        >
                          <option value="100ml">100ml</option>
                          <option value="200ml">200ml</option>
                          <option value="500ml">500ml</option>
                          <option value="800ml">800ml</option>
                        </select>
                      </div>
                      <div className="border py-2 px-4 rounded-full bg-gray-100 flex gap-5 items-center">
                        <button>
                          <HiMinus />
                        </button>
                        <button className="font_family text-base font-medium">
                          1
                        </button>
                        <button>
                          <GoPlus />
                        </button>
                      </div>
                    </div>
                    <div className="border py-2 px-16 rounded-full bg-orange-600 text-white hover:bg-orange-700 text-center">
                      <button className="font_family font-normal text-base ">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col md:gap-10 gap-2 mb-8">
                    <div className="whishlist-box flex items-center gap-2">
                      <BsHeart />
                      <p className="font_family text-base font-medium">
                        Add to wishlist
                      </p>
                    </div>
                    <div className="moneyback_cox flex items-center gap-1">
                      <input type="checkbox" className="custom-checkbox" />
                      <label
                        for="vehicle1"
                        className="ps-0.5 text-base font-medium"
                      >
                        30 days money back guarantee
                      </label>
                    </div>
                  </div>
                  <div className="other_details">
                    <div className="button-group md:py-1 py-2 bg-gray-200 md:w-max md:px-1 md:rounded-full flex md:flex-row flex-col xl:gap-5 gap-3 mb-6 w-full">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          className={`xl:px-10 px-7 py-0.5 rounded-full font-medium md:text-base text-sm ${
                            activeTab === tab.id ? "bg-white" : ""
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <div className={`flex flex-col gap-2 ${activeTab}`}>
                      {content[activeTab].map((item, index) => (
                        <Accordian
                          key={index}
                          title={item.title}
                          content={item.content}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto 2xl:px-20 lg:px-6 px-4 py-10">
            <div>
              <h3 className="text-3xl font-semibold">Recommended</h3>
            </div>
            <div className="product_cards  py-5 mt-6">
              <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-8">
                <Card
                  img={product1}
                  name={"Tiramisu Cake With Strawberry Sauce"}
                  price={"12.00"}
                  order={"1035"}
                />
                <Card
                  img={product2}
                  name={"Premium Cupcakes"}
                  price={"12.00"}
                  order={"1035"}
                />
                <Card
                  img={product3}
                  name={"Premium Cookies"}
                  price={"12.00"}
                  order={"1035"}
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="border border-orange-600 py-1.5 px-20 rounded-xl bg-orange-600 text-white shadow-md shadow-orange-600 hover:bg-orange-700 transition ease-in-out mb-3">
                View More
              </button>
            </div>
          </div>
        </section>
        <section
          className="px-4 md:px-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${subsribeback})` }}>
          <Subscribe />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Productdetails;
