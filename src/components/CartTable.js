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

export default function Product() {

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TITLE</TableCell>
            <TableCell align="left">DESCRIPTION</TableCell>
            <TableCell align="left">IMAGE&nbsp;(g)</TableCell>
            <TableCell align="left">PRICE&nbsp;(g)</TableCell>
            <TableCell align="left">QUANTITY&nbsp;(g)</TableCell>
            <TableCell align="left">TOTAL&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={index} // Assuming "id" is a unique identifier for each product
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.title}
              </TableCell>
              <TableCell align="left">{item.description}</TableCell>
              <TableCell align="left"> <img src={item.image} alt={item.title} width={40} /></TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>

              <TableCell align="left">{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

