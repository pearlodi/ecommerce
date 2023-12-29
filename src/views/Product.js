import React, { useState } from "react";
import "../assets/css/products.css";
import Productitems from "../components/View/Productitems";
import item from "../Array";
import ColorFilter from "../components/Filters.js/FilterColor";
import CategoryFilter from "../components/Filters.js/FilterButton";
import Range from "../components/Filters.js/Range";
import Header from "../components/Navigator/Header";
import { useSelector, useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import SortIcon from '@mui/icons-material/Sort';
import Notification from "../components/Notification/CartNotification";
import { hideNotification } from "../redux/CartSlice";
import { hideNotifications } from "../redux/WishSlice";
import Footer from "../components/Navigator/Footer";
const Product = () => {

   const notification = useSelector((state) => state.cart.notification || { message: '', show: false });


const dispatch = useDispatch();

  const handleCloseNotification = () => {
    dispatch(hideNotification());
    dispatch(hideNotifications());
  };
  
  const [displayText, setDisplayText] = useState(<SortIcon style={{color: 'black'}}/>);
  const [toggleFilter, setToggleFilter] = useState(false);

  const toggleText = () => {
    if (toggleFilter) {
      setDisplayText(<SortIcon style={{color: 'black'}}/>);
    } else {
      setDisplayText(<ClearIcon style={{color: 'black'}}/>);
    }
    setToggleFilter(!toggleFilter);
  };
  const divClass = toggleFilter ? 'mobile-categ' : "categ";
  

  return (
    <div>
      <Header />
      {notification.show && (
         <Notification message={notification.message} onClose={handleCloseNotification} />
      )}
   
      <div className="product-page-details">
        <div className="cate">
          <div className={divClass}>
         <div onClick={toggleText} className="filter-toggle-open">{displayText}</div>

            <CategoryFilter />
            <div className="range">
              <br></br>
              <Range />
              <ColorFilter />
            </div>
          </div>
        </div>
        <div className="product-page">
       <div className="filter-products">
       <div onClick={toggleText} className="filter-toggle">{displayText} Filter </div>
        <div className="prods">
          {item.map((item, index) => (
            <Productitems item={item} key={item.id} />
          ))}
        </div>
       </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Product;
