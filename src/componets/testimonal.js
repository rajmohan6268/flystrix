import React, { Component } from "react";
import Slider from "react-slick";

function testimonal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  };
  return (
    <div className="container mx-auto text-white max-w-7xl">
      <Slider {...settings}>
      {[1,1,1,1,1, 1, 1].map(() => {
            return (
              <>
                <div className="p-12 mx-4 space-y-4 text-center box-bg-t rounded-2xl">
                  <div className="">
                    <img
                      className="w-20 h-20 mx-auto rounded-full"
                      src="/t1.png"
                      alt=""
                    />
                  </div>

                  <div className="">Alex Samurai</div>

                  <div className="text-l-green">Technician</div>

                  <div className="">
                    "A collection of Node JS and Golang Backend interview
                    questions please feel free to fork and contribute to this
                    repositoryi"
                  </div>
                </div>
              </>
            );
          })}
      </Slider>
    </div>
  );
}

export default testimonal;
