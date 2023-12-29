// import React, { useState } from 'react';
// import Productitems from './Productitems';

// const Pagination = ({ items }) => {
//   const itemsPerPage = 8;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className='prods'>
//       {/* {currentItems.map((item) => (
//         <Productitems key={item.id} item={item} />
//       ))} Close the .map() method here */}

//       <ul className="pagination">
//         {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map(
//           (_, index) => (
//             <li key={index}>
//               <p
//                 onClick={() => paginate(index + 1)}
//               >
//                 {index + 1}
//               </p>
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
