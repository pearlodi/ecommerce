import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import item from '../../Array';

const IndexSliderMen = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const [slidesToShow, setSlidesToShow] = useState(3); // Default number of slides

  useEffect(() => {
    // Function to update slidesToShow based on screen width
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 750) { // Change 768 to your desired mobile breakpoint
        setSlidesToShow(1); // Set slidesToShow to 1 for mobile screens
      } else if (window.innerWidth <= 800){
        setSlidesToShow(2); // Set slidesToShow to 3 for larger screens
      }else{
        setSlidesToShow(4);
      }
    };

    // Call the function initially and add event listener for window resize
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow, // Set slidesToShow based on screen width
  };

  return (
    <Slider {...settings}>
      {item.map((item) => (
        <div key={item.id} className='slider'>
          <img src={item.image} alt={item.title} className='slider-image' />
        </div>
      ))}
    </Slider>
  );
};

export default IndexSliderMen;
