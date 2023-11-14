import React, { useState } from "react";
import "../assets/css/products.css";
import Productitems from "../components/Productitems";
// import { useSelector } from 'react-redux';
import Header from "../components/Header";
import item from "../Array";
import IndexSliderMen from "../components/IndexSliderMen";
import CategoryFilter from "../components/FilterButton";
import Range from "../components/Range";
// import Pagination from '../components/StyledPagination';
// import item from '../Array';

const Product = () => {
  // const [product, setProduct] = useState([]);
  // const cart = useSelector((state)=> state.cart.cart);
  // console.log(cart);

  // useEffect(() => {
  //    const fetchProducts = async () => {
  //     // await fetch('https://fakestoreapi.com/products')
  //     // .then(res=>res.json())
  //     // .then(data=>setProduct(data)

  //      try{
  //         const response = await fetch('https://fakestoreapi.com/products');
  //         if (!response.ok){
  //             throw new Error('nope not working');
  //         }
  //         const data = await response.json();
  //         console.log(data);
  //         setProduct(data);
  //     }catch (error){
  //         console.error('nopey no', error)
  //     }

  //    };
  //    fetchProducts();
  // }, [])

  return (
    <div>
      <Header />
      {/* <IndexSliderMen /> */}
      {/* <PriceRangeFilter /> */}
      <div className="product-view">
        <div className="cate">
          <div className="categ">
            <CategoryFilter />
            <div className="range">
              <Range />
            </div>
          </div>
        </div>
        <div className="prods">
          {item.map((item, index) => (
            <Productitems item={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* <Pagination items={item}/> */}
    </div>
  );
};

export default Product;
