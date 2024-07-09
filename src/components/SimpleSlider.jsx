import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'


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
    <div className="asd1">
      <Slider {...settings}>
        <div id="asd1">
          <h3>1</h3>
        </div>
        <div id="asd1">
          <h3>2</h3>
        </div>
        <div id="asd1">
          <h3>3</h3>
        </div>
        <div id="asd1">
          <h3>4</h3>
        </div>
        <div id="asd1">
          <h3>5</h3>
        </div>
        <div id="asd1">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
