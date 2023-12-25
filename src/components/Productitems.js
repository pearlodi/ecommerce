
// import React from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Modal from '../components/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, removeFromCart } from '../redux/CartSlice';

// const Productitems = ({ item }) => {
//   const cart = useSelector((state) => state.cart.cart);
//   const dispatch = useDispatch();

//   const addItemToCart = (item) => {
//     dispatch(addToCart(item));
//   };

//   const removeItemFromCart = (item) => {
//     dispatch(removeFromCart(item));
//   };

//   const setCategoryFilter = (category) => {
//     dispatch(setCategoryFilter(category));
//   };

//   return (
//     <div className='prods'>
//       <div className='product-item'>
//         <div className='product-title'>{item.title}</div>
//         <div className='product-img'>
//           <img src={item.image} alt={item.title} className='product--img' />
//         </div>
//         <div>
//           <p className='product-price'>
//             <strong>Price:</strong> ${item.price}
//           </p>
//         </div>
//         <div className='product-details'>
//           <Modal item={item} />

//           {cart.some((x) => x.id === item.id) ? (
//             <button onClick={() => removeItemFromCart(item)} className='product-btn-cart'>
//               Remove from cart
//               <ShoppingCartIcon style={{ width: 15 }} />
//             </button>
//           ) : (
//             <button onClick={() => addItemToCart(item)} className='product-btn-cart'>
//               Add to cart
//               <ShoppingCartIcon style={{ width: 15 }} />
//             </button>
//           )}

//           {/* <button className='product-btn-buy'>Buy now</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productitems

import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice';



const Productitems = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);
  const selectedCategory = useSelector((state) => state.cart.selectedCategory);
  const selectedPrice = useSelector((state) => state.cart.selectedPrice);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  if ((selectedCategory && item.category !== selectedCategory) || (selectedPrice && item.price !== selectedPrice)) {
    return null;
  }
  
    // Hide the item if it doesn't match the selected category
  // }else if (selectedPrice && item.price !== selectedPrice) {
  //   return null; // Hide the item if it doesn't match the selected category
  // }

  return (
    <div className='prods'>
      <div className='product-item'>
        <div>
          {/* <div className='product-title'>{item.title}</div> */}
          <div className='product-img'>
            <img src={item.image} alt={item.title} className='product--img' />
          </div>
          <div>
            <div className='modal'>
            <p className='product-price'>
              <strong>Price:</strong> ${item.price}
            </p>
            <Modal item={item} />

            </div>

          </div>
          <div className='product-details'>  

         {cart.some((x) => x.id === item.id) ? (
            <p onClick={() => removeItemFromCart(item)} className='product-btn-cart'>
              Remove from cart
              <ShoppingCartIcon style={{ width: 15 }} />
            </p>
          ) : (
            <p onClick={() => addItemToCart(item )} className='product-btn-cart'>
              Add to cart
              <ShoppingCartIcon style={{ width: 15 }} />
            </p>
          )}

          {/* <button className='product-btn-buy'>Buy now</button> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Productitems;
