import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically slides the content
    autoplaySpeed: 3000,
    arrows: true, // Display next/prev arrows
  };

  return (
    <div className="container">
        <div className='row'>
      <Slider {...settings}>

        {/* First Slide */}
        <div className="slide-item text-center">
            <div className='w-100'>
            <h2>A Mending<br /> Therapy Patel</h2>
          <p>
            There are many variations of ji of Lorem Ip yoyo,<br /> 
            but the majority have suffered aeration in some form.
          </p>
          <div>
            <a href="" className="btn-sm-01 thm-btn-sm-01">Make an Appointment</a>
            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
              <span className="delogis-icons-two-play"></span>
              <i className="ripple"></i>
            </a>
          </div>
            </div>
        </div>

        {/* Second Slide */}
        <div className="slide-item text-center">
          <h2>A Legacy of Outstanding<br /> Therapy Services</h2>
          <p>
            There are many variations of passages of Lorem Ip available,<br /> 
            but the majority have suffered aeration in some form.
          </p>
          <div>
            <a href="" className="btn-sm-01 thm-btn-sm-01">Make an Appointment</a>
            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
              <span className="delogis-icons-two-play"></span>
              <i className="ripple"></i>
            </a>
          </div>
        </div>

      </Slider>
      </div>
    </div>
  );
};

export default HeroHeader;
