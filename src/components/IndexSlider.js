import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';
import item from '../Array';

const IndexSliderMen = () => {
  // const [product, setProduct] = useState([]);
  // const selectedGenre = "gown";
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  // useEffect(() => {
  //   fetchProducts();
  // }, [selectedGenre]);

  // const fetchProducts = () => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Filter the data to include only items with the "electronics" category
  //       const electronicsProducts = data.filter((item) => item.category === selectedGenre);
  //       setProduct(electronicsProducts);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
        <div key={item.id} className='index-slider'>
          <img src={item.image} alt={item.title} className='index-slider-image' />
<p><strong>{item.title}</strong></p>

<p>${item.price}</p>
      
        </div>
      ))}
    </Slider>
  );
};

export default IndexSliderMen;
