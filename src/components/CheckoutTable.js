import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Cart from '../views/Cart';
import { useSelector } from 'react-redux';

export default function CheckoutTable() {

    const cart = useSelector((state) => state.cart.cart);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         console.log(data);
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products', error);
//       }
//     };
//     fetchProducts();
//   }, []);

  return (
    <TableContainer component={Paper} className='table-body'>
      <Table sx={{ minWidth: 400,}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PRODUCTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {cart.map((item, index) => (
            <TableRow
              key={index} // Assuming "id" is a unique identifier for each product
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
              <div className='checkout-table-items'>
              <div>
                <img src={item.image} 
                alt={item.title} width={150} />
                </div>
         <div className='checkout-table-details'>
            
        <p>
        {item.price}</p><p>
        {item.title}
        </p>
         </div>
              </div>
              </TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

