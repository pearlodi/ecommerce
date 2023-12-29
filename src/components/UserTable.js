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
import item from '../Array';

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
const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);

  return (
    <>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {/* <TableCell align="right">IMAGE&nbsp;(g)</TableCell> */}

            <TableCell>Product</TableCell>

            <TableCell align="left">PRICE&nbsp;(g)</TableCell>
            <TableCell align="left">TOTAL&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={index} // Assuming "id" is a unique identifier for each product
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {/* <TableCell align="left"> <img src={item.image} alt={item.title} width={120} /></TableCell> */}
              <TableCell component="th" scope="item">
                {item.title}
              </TableCell>
            
            
              <TableCell align="left">${item.price} * {item.quantity}</TableCell>

              <TableCell align="left">${item.price * item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
         
            <TableRow
           
            >
               
            
            
             
               <TableCell align="left">Grand total
</TableCell>
<TableCell align="left">
</TableCell> <TableCell align="left">${total}
</TableCell>
            </TableRow>
        </TableBody>

      </Table>
    </TableContainer>
    </>
  );
}

