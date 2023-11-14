// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setPriceFilter } from '../redux/CartSlice';

// const Range = () => {
//   const dispatch = useDispatch();

//   const handlePriceChange = (event) => {
//     const selectedPrice = parseFloat(event.target.value);
//     dispatch(setPriceFilter(selectedPrice));
//   };

//   return (
//     <div className="Price-range">
//       <input
//         type="range"
//         min="20"
//         max="60"
//         step="10"
//         defaultValue="20" // Initial value
//         onChange={handlePriceChange}
//       />
//     </div>
//   );
// };

// export default Range;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPriceFilter } from '../redux/CartSlice';

const Range = () => {
  const dispatch = useDispatch();
  const [rangeValue, setRangeValue] = useState(0);

  const handlePriceChange = (event) => {
    const selectedPrice = parseFloat(event.target.value);
    setRangeValue(selectedPrice);
    dispatch(setPriceFilter(selectedPrice));
  };

  return (
    <div className="Price-range">
      <input
      className='price-range'
        type="range"
        min="0"
        max="60"
        step="10"
        value={rangeValue} // Use value instead of defaultValue
        onChange={handlePriceChange}
        style={{
          width: '100%',
          borderRadius: '25px', // Apply a circular style
          backgroundColor: 'red', // Change the background color to red
        }}
      />
      <div style={{ textAlign: 'left', marginTop: '18px' }}>
        <p>{rangeValue < 10 ? "All prices" : `Prices:  $${rangeValue}`}</p>
      </div>
    </div>
  );
};

export default Range;

