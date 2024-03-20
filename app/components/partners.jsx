"use client";

import Heading from "./heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    svg: "/partner-logos/spotify.svg",
    png: "/partner-logos/spotify-logo.png",
  },
  {
    svg: "/partner-logos/microsoft.svg",
    png: "/partner-logos/microsoft-logo.png",
  },
  {
    svg: "/partner-logos/google.svg",
    png: "/partner-logos/google-logo.png",
  },
  {
    svg: "/partner-logos/dribbble.svg",
    png: "/partner-logos/dribbble-logo.png",
  },
  {
    svg: "/partner-logos/webflow.svg",
    png: "/partner-logos/webflow-logo.png",
  },
];

export default function Partners({ className }) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 0,
    initialSlide: 0,
    autoplay: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: true,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <Heading className="mb-14">Partners</Heading>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="!flex justify-center opacity-70 focus:outline-none">
            <img src={partner.png} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
