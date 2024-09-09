import React from 'react'
import { NextArrow, PrevArrow } from '../Component/Arrows';

const Slidersettings = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "170px",
        slidesToShow: 1,
        speed: 500,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: true,
              centerPadding: "120px",
            },
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode: true,
              centerPadding: "150px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerPadding: "120px",
              centerMode: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "30px",
            },
          },
        ],
      };
 
      const secondslide = {
        className: "normal",
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              speed: 500,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
            },
          },
        ],
      };
    
  return {settings , secondslide}
}

export default Slidersettings;
