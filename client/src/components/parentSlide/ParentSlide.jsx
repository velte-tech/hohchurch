import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './ParentSlide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"
import { slideData } from "./Data";


const ParentSlide = () => {

      const sliderRef = useRef(null)

      const settings = {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4.1,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [{
                  breakpoint: 1204,
                  settings: {
                      slidesToShow: 3.7,
                      slidesToScroll: 1,
                      infinite: true,
                  },
              },
              {
                  breakpoint: 1104,
                  settings: {
                      slidesToShow: 3.4,
                      slidesToScroll: 1,
                      infinite: true,
                  },
              },
              {
                  breakpoint: 1000,
                  settings: {
                      slidesToShow: 3.2,
                      slidesToScroll: 1,
                      infinite: true,
                  },
              },
              {
                  breakpoint: 900,
                  settings: {
                      slidesToShow: 2.8,
                      slidesToScroll: 1,
                      infinite: true,
                  },
              },
              {
                  breakpoint: 800,
                  settings: {
                      slidesToShow: 2.4,
                      slidesToScroll: 1,
                      infinite: true,
                  },
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                  },
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                  },
              },
          ],
      };

  return (
    
      <div className="slider_wrapper3">
          
        <h1 className="hover_overlay">VIEW ALL PARENT RESOURCES</h1>

      <div className="slider_top">
        <p> </p>
        <div className="buttons text_center">
        <div 
        className="arrow_btn arrow_btn_one"
        onClick={() =>sliderRef.current.slickPrev()}
        >
        <IoMdArrowDropleft /></div>
        <div 
        className="arrow_btn arrow_btn_two"
        onClick={() =>sliderRef.current.slickNext()}
        >
            <IoMdArrowDropright /></div>
        </div>

      </div>
      <Slider ref={sliderRef} {...settings}>
        {slideData.map((item) => (
          <Link key={item.id} className="card">
            <div className="card_top">
                
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card_bottom">
              <p className="title">{item.cart}</p>
              <p className="head">{item.title}</p>
              <p className="name">{item.names}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
      
  )
}

export default ParentSlide