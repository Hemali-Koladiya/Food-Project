import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import slide1 from "../Images/1slide.jpg";
import slide2 from "../Images/2slide.jpg";
import slide3 from "../Images/3slide.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Style.css";
import Card from "../Component/Card";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import subsribeback from "../Images/subscribe.png";
import Subscribe from "../Component/Subscribe";
import slider21 from "../Images/slide21.jpg";
import slider22 from "../Images/slide22.jpg";
import slider23 from "../Images/slide24.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import { RiCalendarEventFill } from "react-icons/ri";
import { LuAlarmClock } from "react-icons/lu";
import comment1 from "../Images/comment1.png";
import comment2 from "../Images/comment2.png";
import comment3 from "../Images/comment3.png";
import comment4 from "../Images/comment4.png";
import input from "../Images/input.png";
import { NavLink } from "react-router-dom";
import Slidersettings from "./Slidersettings";

const Home = () => {
  
  const {settings , secondslide} = Slidersettings();
  const firstsliderimages = [slide1, slide2, slide3];
  const secondsliderimages = [slider21, slider22, slider23];
  const cookiesimages = [image1, image2, image3, image4];
  const commentsimages = [comment1, comment2, comment3, comment4];

  return (
    <>
      <Header />
      <div className="home_page">
        <section>
          <div className="container mx-auto xl:py-9 md:py-12 py-8 px-4 lg:px-6 2xl:px-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-12 items-center lg:mt-8">
              <div className="column">
                <div className="detail_box  lg:w-9/12">
                  <h2 className="font-semibold xl:text-4xl md:text-3xl text-2xl lg:mb-3.5 mb-3 ">
                    Delicious Food & <br /> Recipes For Your Family
                  </h2>
                  <p
                    className="text-wrap xl:text-base text-sm lg:mb-7 mb-6"
                    style={{ color: "#12103DCC" }}
                  >
                    Id cursus metus aliquam eleifend mi in nulla posuere. Lorem
                    faucibus vitae aliquet nec ullamcorper sit.
                  </p>
                  <div className="button_group md:gap-5 gap-4 flex">
                    <button className="border md:px-6 px-5 py-2.5 rounded-full text-white md:text-sm text-xs font-medium bg-orange-600 hover:bg-orange-700 transition ease-in-out ">
                      Order now
                    </button>
                    <button className="border md:px-6 px-5 py-2.5 rounded-full text-orange-600 md:text-sm text-xs font-medium bg-red-100 hover:bg-red-200 transition ease-in-out">
                      Join reseller
                    </button>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="w-full slide_1"
                    style={{ marginBottom: "-7px" }}
                  >
                    <Slider {...settings}>
                      {firstsliderimages.map((img, index) => (
                        <div className="px-2" key={index}>
                          <img src={img} alt="silde 1" className="rounded-xl" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto xl:py-9 md:py-12 py-8 px-4 lg:px-6 2xl:px-20">
            <div className="menu_title flex justify-between">
              <h3 className="lg:text-3xl text-2xl font-semibold">
                Popular Menu
              </h3>
              <NavLink
                to="/product"
                className="lg:text-base text-sm font-normal text-orange-600 flex items-center gap-2"
              >
                view all <span className="lg:text-xl text-lg">&#x3e;</span>
              </NavLink>
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
          </div>
        </section>
        <section
          className="lg:my-24 md:my-16 my-10 px-4 md:px-0 lg:mb-0 mb-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${subsribeback})` }}
        >
          <Subscribe />
        </section>
        <section>
          <div className="container mx-auto xl:py-20 py-16  px-4 lg:px-6 2xl:px-20">
            <div className="menu_title flex justify-between">
              <h3 className="lg:text-3xl text-2xl font-semibold">Top Recipe</h3>
              <button className="lg:text-base text-sm font-normal text-orange-600 flex items-center gap-2">
                view all <span className="lg:text-xl text-lg">&#x3e;</span>
              </button>
            </div>
            <div className="recipe_box flex flex-col lg:flex-row gap-6 mt-12 md:border md:shadow-md md:px-5 md:pt-9 pb-0 rounded-2xl">
              <div
                className="lg:w-1/3 w-full  rounded-2xl relative slide_2 overflow-hidden h-full"
                style={{ margin: 0, padding: 0 }}
              >
                <Slider {...secondslide}>
                  {secondsliderimages.map((img, index) => (
                    <div className="md:px-2 lg:px-0" key={index}>
                      <img src={img} alt="slide 1" className="rounded-2xl" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="lg:w-2/3  md:flex xl:py-5 xl:gap-8 gap-6">
                <div className="xl:w-36 md:w-32 w-full flex md:flex-col md:gap-5 flex-wrap  justify-center gap-6">
                  {cookiesimages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="image-1"
                      className="xl:h-28 h-24 md:w-full w-5/12 rounded-2xl object-cover"
                    />
                  ))}
                </div>
                <div className=" lg:w-full md:w-9/12 xl:w-8/12 mt-8 md:mt-0">
                  <h3
                    className="xl:text-3xl text-2xl font-medium xl:mb-4 mb-3 mt-3"
                    style={{ color: "#333333" }}
                  >
                    Home Made Chocolate Donut
                  </h3>
                  <p
                    className="xl:text-base text-sm font-normal xl:mb-6 mb-4"
                    style={{ color: "#333333CC" }}
                  >
                    Id cursus metus aliquam eleifend mi in nulla posuere. Lorem
                    faucibus vitae aliquet nec ullamcorper sit.
                  </p>
                  <div className="time_details flex md:gap-8 xl:mb-6 mb-4 gap-6">
                    <p className="flex items-center gap-2">
                      <RiCalendarEventFill color={"#333333CC"} size={16} />
                      <span
                        className="xl:text-base md:text-sm text-xs font-medium"
                        style={{ color: "#333333CC" }}
                      >
                        August, 25, 2003
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <LuAlarmClock color={"#333333CC"} size={16} />
                      <span
                        className="xl:text-base md:text-sm text-xs font-medium"
                        style={{ color: "#333333CC" }}
                      >
                        15 minutes cook
                      </span>
                    </p>
                  </div>
                  <div
                    className="recipe xl:text-base text-sm font-normal mb-8"
                    style={{ color: "#333333CC" }}
                  >
                    <p className="mb-3">
                      Adipiscing at in tellus integer. Pellentesque massa
                      placerat duis ultricies lacus. Nisi porta lorem mollis
                      aliquam ut porttitor leo.
                    </p>
                    <ol
                      className="ps-4 flex flex-col gap-2"
                      style={{ listStyleType: "decimal" }}
                    >
                      <li>Venenatis cras sed felis eget.</li>
                      <li>Duis ultricies lacus sed turpis tincidunt.</li>
                      <li>Interdum varius sit amet mattis.</li>
                      <li>
                        Libero justo laoreet sit amet cursus sit amet dictum
                        sit.
                      </li>
                      <li>Pellentesque massa placerat duis </li>
                    </ol>
                  </div>
                  <div className="comments flex md:flex-row flex-col md:items-center md:justify-between gap-7 md:gap-0">
                    <div className="comment_number flex  items-center gap-3">
                      <div className="flex ps-3">
                        {commentsimages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt="comment 1"
                            style={{ marginLeft: "-14px" }}
                          />
                        ))}
                      </div>
                      <p
                        className="font-normal xl:text-sm text-xs"
                        style={{ color: "#333333" }}
                      >
                        1.2K+ comment
                      </p>
                    </div>
                    <div className="border border-orange-600 flex py-2 px-4 gap-3 rounded-full items-center md:w-6/12 justify-between">
                      <input
                        type="text"
                        placeholder="Type Comment"
                        className="outline-none xl:text-sm text-xs w-full caret-orange-600"
                      />
                      <img src={input} alt="input" className="h-4 w-4" />
                    </div>
                  </div>
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

export default Home;
