import React, { useEffect } from "react";
import "../assets/css/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import IndexSliderMen from "../components/Sliders/IndexSliderMen";
import armani from "../assets/img/armani.svg";
import burberry from "../assets/img/burberry.svg";
import dior from "../assets/img/dior.svg";
import fendi from "../assets/img/fendi.svg";
import gucci from "../assets/img/gucci.svg";
import versace from "../assets/img/versace.svg";
// import white1 from "../assets/img/white1.jpg";
// import white from "../assets/img/white.jpg";
import { NavLink } from "react-router-dom";
// import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
// import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Footer from "../components/Navigator/Footer";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      // once: true, // Only animate elements once
    });
  }, []);

  return (
    <div className="App">
      <div className="keyframes">
       <h1 data-aos="zoom-in" data-aos-duration="2000" className="keyframes-text">WELCOME
       </h1>
   
      </div>

      <div className="background-changer">
        
        <div className="page-content">
          <p className="index-text" data-aos="fade-down" data-aos-duration="9000">
            Welcome to us
          </p>
          <h1 className="content-header"  data-aos="fade-up" data-aos-duration="9000">CLASSY & FABULOUS</h1>
          <p className="content-text" data-aos="fade-up" data-aos-duration="9000">
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

<div className="index-2-imgs">
  <div className="index-2--imgs" data-aos="zoom-in">
  <img src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/12/product-18.jpg" alt=""  className="index--2--img"/>
  <p className="index-2-titles">Elevate Your Style Game</p>
   <p className="index-2-texts">Find Your Fashion Inspiration Here</p>
  <NavLink to="/product">
            <button width={100} className="index-2-btn" >
              Get Started
            </button>
          </NavLink>
  </div>
<div className="index-2--imgs" data-aos="zoom-in">
<img src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/12/product-18-4.jpg" alt=""  className="index--2--img"  />
<p className="index-2-titles">Elevate Your Style Game</p>
   <p className="index-2-texts">Find Your Fashion Inspiration Here</p>
  <NavLink to="/product">
            <button width={100} className="index-2-btn" >
              Get Started
            </button>
          </NavLink>
</div>
</div>


      
      <div className="explore">
        <IndexSliderMen />
      </div>


      

      <div className="overlay-containera">
        <div className="page-content">
          <p className="index-text" data-aos="fade-up" data-aos-duration="5000">
            Shop on budget
          </p>
          <h1 className="content-header">SHOP WITH CLASS</h1>
          <p className="content-text">Let the shopping spree begin</p>
          <NavLink to="/product">
            <button width={100} className="started-btn">
              Shop now
            </button>
          </NavLink>
        </div>
      </div>


<div className="index-b2">
        <div className="index-b2-row">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className="index-b2-img"
          >
            <img
             src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/04/product-23.jpg"
              alt=""
              className="index-b2--img"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="index-b2-img">
            <img
               src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/12/product-22-2.jpg"
              alt=""
              className="index-b2--img"
            />
          </div>
        </div>
        <div className="index-b2-row"> 
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            className="index-b2-imgs"
          >
            <img
              src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/04/product-23-4.jpg"
              h
              alt=""
              className="index-b2--imgs"
            />
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
            className="index-b2-imgs"
          >
            <img
              src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/12/product-22-3.jpg"
              alt=""
              className="index-b2--imgs"
            />
          </div>
        </div>
        <div className="index-b2-row last">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className="index-b2--img"
          >
            <img
               src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/04/product-23-2.jpg"
              alt=""
              className="index-b2--img"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="index-b2-img">
            <img
               src="https://wpbingosite.com/wordpress/bedesk/wp-content/uploads/2020/12/product-22.jpg"
              alt=""
              className="index-b2--img"
            />
          </div>
        </div>
      </div>




      <div className="index-e">
        <div className="index-e-info">
          <h1 className="index-e-title">
            Buy better.<br></br> Buy less. Wear more.
          </h1>
          <NavLink to="/product">
            <button width={100} className="index-e-btn">
              Shop now
            </button>
          </NavLink>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/portrait-beautiful-young-girl-elegant-black-hat-black-background_298446-2056.jpg?size=626&ext=jpg&ga=GA1.1.1077833249.1691186687&semt=ais"
          alt=""
        />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Index;
