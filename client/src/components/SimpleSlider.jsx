import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Css/Slider.css'


function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    ],
  };

  return (
    <div className="ass">
      <Slider {...settings} className="asd1">
          <div id="asd1">
            <img className="pic" src="4.jpg"/>
          </div>
          <div id="asd1">
            <img className="pic" src="1.jpg"/>
          </div>
          <div id="asd1">
            <img className="pic" src="2.jpg"/>
          </div>
          <div id="asd1">
            <img className="pic" src="3.jpg"/>
          </div>
          <div id="asd1">
            <img className="pic" src="5.jpg"/>
          </div>
          <div id="asd1">
            <img className="pic" src="6.jpg"/>
          </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
