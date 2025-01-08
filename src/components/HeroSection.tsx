"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarusel from "./HeroCarusel";
import { LeftArrowIcon, RightArrowIcon } from "../icons"
import data from "../data/banner.json";
const banner = data.banner;

const SamplePrevArrow = ({ className, onClick, type }: any) => {

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {type === "prev" ? (
        <RightArrowIcon width={60} height={60}  />
      ) : (
        <LeftArrowIcon width={60} height={60} />
      )}
    </div>
  );
};
const HeroSection = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <SamplePrevArrow type="prev" />,
    nextArrow: <SamplePrevArrow type="next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
      <div className="md:h-[calc(100vh-112px)] h-[calc(100vh-80px)] ">
        <Slider {...settings} className="lg:h-full custom-width ">
          {banner.map((items: any, index: number) => {
            return (
              <HeroCarusel
                imageURL={items.image}
                text={items.text}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
  );
};

export default HeroSection;
