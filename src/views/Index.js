import React, { useEffect } from "react";
import "../assets/css/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import IndexSliderMen from "../components/IndexSliderMen";
import pink1 from "../assets/img/image2.jpg";
// import pink3 from "../assets/img/pink1.jpg";
// import pink2 from "../assets/img/pink2.jpg";
// import IndexSlider from "../components/IndexSlider";
import armani from "../assets/img/armani.svg";
import burberry from "../assets/img/burberry.svg";
import dior from "../assets/img/dior.svg";
import fendi from "../assets/img/fendi.svg";
import gucci from "../assets/img/gucci.svg";
import versace from "../assets/img/versace.svg"
import explore from "../assets/img/explore.png"
import { NavLink } from "react-router-dom";

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate elements once
    });
  }, []);

  return (
    <div className="App">
      <div className="background-changer">
        <div className="page-content">
          <p className="index-text" data-aos="fade-up" data-aos-duration="5000">
            Welcome to Eona
          </p>
          <h1 className="content-header">CLASSY & FABULOUS</h1>
          <p className="content-text">
            Create something beautiful and timeless
          </p>
          <NavLink to="/product">
            <button width={100} className="started-btn">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      <Marquee>
        <div className="marquee-img">
          <img src={armani} alt="" className="marquee--img" />
        </div>
        <div className="marquee-img">
          <img src={burberry} alt="" className="marquee--img" />
        </div>
        <div className="marquee-img">
          <img src={fendi} alt="" className="marquee--img" />
        </div>
        <div className="marquee-img">
          <img src={gucci} alt="" className="marquee--img" />
        </div>
        <div className="marquee-img">
          <img src={versace} alt="" className="marquee--img" />
        </div>
        <div className="marquee-img">
          <img src={dior} alt="" className="marquee--img" />
        </div>
      </Marquee>
      <div>
        <div className="index-ba">
          <img
            src="https://htmldemo.net/noraure/noraure/img/banner/img-1.jpg"
            alt=""
            className="index--ba"
          />
          <h1 className="index-ba-text">
           40% off
          </h1>
          <img
            src="https://htmldemo.net/noraure/noraure/img/banner/img-2.jpg"
            alt=""
            className="index--ba"
          />
        </div>

        <div className="index-ba">
          <h1 className="index-ba-text">
           BRAND NEW STYLE
          </h1>
          <img src={pink1} alt="" className="index--ba" />

          <h1 className="index-ba-text">
            CHOOSE YOUR LOOK
          </h1>
        </div>
      </div>



      <div class="overlay-container">
</div>
      <div className='explore'>
     
<IndexSliderMen />
  </div>
  
  <div className="arrivals">
   <div className="arrivals-img">
   <img src="https://ap-demo-apollotheme.myshopify.com/cdn/shop/files/layer2-slide2-h2_900x.png?v=1613536936" alt="" className="arrivals-img"/>
   </div>
   <NavLink to="/product">
<div>
<p className="arrival-text">NEW ARRIVALS</p>
</div>
</NavLink>
  </div>
    </div>
  );
}

export default Index;
