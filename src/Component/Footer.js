import React from "react";
import { LiaLinkedin } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { SiInstagram } from "react-icons/si";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <div className="footer_component" style={{ backgroundColor: "#FF4A22" }}>
        <div className="container mx-auto py-14 px-4 lg:px-6 2xl:px-20">
          <div class="grid lg:grid-cols-6 grid-cols-1 gap-8 lg:gap-0">
            <div className="lg:col-span-2 text-white">
              <h2 className="text-4xl font-semibold mb-4">DeliCook</h2>
              <p className="font-normal text-sm 2xl:w-4/6 lg:w-5/6" style={{lineHeight: "28px"}}>
                Id cursus metus aliquam eleifend mi in nulla posuere. Lorem
                faucibus vitae aliquet
              </p>
            </div>
            <div className="text-white">
              <h5 className="font-medium mb-4" style={{fontSize: "17px"}}>About Us</h5>
              <ul className="flex flex-col gap-2">
                <li className="font-normal text-sm">About DeliCook</li>
                <li className="font-normal text-sm">Partnerships</li>
                <li className="font-normal text-sm">Customer</li>
                <li className="font-normal text-sm">Privacy Policy</li>
                <li className="font-normal text-sm">Terms of Service</li>
              </ul>
            </div>
            <div className="text-white">
              <h5 className="font-medium mb-4" style={{fontSize: "17px"}}>Services</h5>
              <ul className="flex flex-col gap-2">
                <li className="font-normal text-sm">Menu</li>
                <li className="font-normal text-sm">Recipe</li>
                <li className="font-normal text-sm">Delivery</li>
                <li className="font-normal text-sm">Reseller</li>
                <li className="font-normal text-sm">Course</li>
              </ul>
            </div>
            <div className="lg:col-span-2 text-white">
              <h5 className="font-medium mb-3" style={{fontSize: "17px"}}>Contact Us</h5>
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <LiaLinkedin size={35}/>
                </div>
                <div>
                  <LiaTwitterSquare size={35}/>
                </div>
                <div>
                  <SiInstagram size={27}/>
                </div>
                <div>
                  <LiaFacebookSquare size={36}/>
                </div>
              </div>
              <p className="font-normal text-sm 2xl:w-3/6 lg:w-4/6">2022 ©delicook.com All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
