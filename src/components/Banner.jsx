import Slider from "react-slick";
import { banners } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineChair } from "react-icons/md";

function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };
  return (
    <div className="banner">
      <div className="w-10/12 m-auto">
        <div>
          <div className="mb-10">
            <div className="header-text">
              <Link className="flex items-center">
                <div className="text-white mr-4 common-hover text-4xl rounded-3xl h-12 w-20 grid place-items-center">
                  <MdOutlineChair />
                </div>
                Elevate Your LifeStyle
              </Link>
              <p>with Our Furniture</p>
              Creations
              <Link className="text-white ml-4 common-hover text-4xl rounded-3xl px-7 py-2">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {banners.map((val, i) => (
              <div key={i}>
                <img src={val.banner} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Banner;
