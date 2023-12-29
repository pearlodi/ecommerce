import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import item from "../../Array";

const IndexSliderMen = () => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    width: 1000,
  };

  return (
    <Slider {...settings}>
      {item.map((item) => (
        <div key={item.id} className="index-slider">
          <img
            src={item.image}
            alt={item.title}
            className="index-slider-image"
          />

          <p>${item.price}</p>
        </div>
      ))}
    </Slider>
  );
};

export default IndexSliderMen;
