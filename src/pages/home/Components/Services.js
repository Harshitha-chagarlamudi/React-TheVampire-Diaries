import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Img1 from "../../../assets/image3.jpg";
import Img2 from "../../../assets/image6.jpg";
import Img3 from "../../../assets/image7.jpg";
import Img4 from "../../../assets/image4.jpg";
import Img5 from "../../../assets/image5.jpg";

const Services = () => {
  const images = [Img1, Img2, Img3, Img4, Img5 ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="heading">Services</h1>
      <section className="services">
        <Slider {...settings}>
          { 
          images.map((image) => {
            return (
              <div key={image}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Services;
