import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Card from "../Component/Card";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import Subscribe from "../Component/Subscribe";
import subsribeback from "../Images/subscribe.png";

const Product = () => {
  return (
    <>
      <Header />
      <div className="product_page">
        <section>
          <div className="container mx-auto px-4 lg:px-6 2xl:px-20 lg:py-16 py-12">
            <h3 className="text-3xl font-semibold mb-8">Popular Menu</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-8">
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
            <div className="text-center mt-16">
              <button className="border border-orange-600 py-1.5 px-20 rounded-xl bg-orange-600 text-white shadow-md shadow-orange-600 hover:bg-orange-700 transition ease-in-out mb-3">
                View More
              </button>
            </div>
          </div>
        </section>
        <section
          className="lg:mt-14 md:mt-12 mt-3 px-4 md:px-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${subsribeback})` }}>
          <Subscribe />
        </section>
      </div>
      <Footer />
    </> 
  );
};

export default Product;
