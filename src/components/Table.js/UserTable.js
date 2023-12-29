import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
const storedData = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const lastName = localStorage.getItem("lastName");
const userMessage = localStorage.getItem("userMessage");
const address = localStorage.getItem("address");
export default function Product() {
  const cart = useSelector((state) => state.cart.cart);

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="item">
                  {item.title}
                </TableCell>

                <TableCell align="left">
                  ${item.price} * {item.quantity}
                </TableCell>

                <TableCell align="left">
                  ${item.price * item.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell align="left">Grand total</TableCell>
              <TableCell align="left"></TableCell>{" "}
              <TableCell align="left">${total}</TableCell>
            </TableRow>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="tables">
        <div className="user-table-details">
          <p className="table-entries">
            <strong>
              Name: {" "}
            </strong>{" "}
            {storedData} {lastName}
          </p>
          <p className="table-entries">
            <strong>
              Email:  
            </strong>
             {email}
          </p>
        
        </div>
        <div className="user-table-details">
          <p className="table-entries">
            <strong>House Address: </strong>
            {address}
          </p>
          {/* <p className="table-entries">
            <strong>
              Email:  
            </strong>
            {email}
          </p> */}
       <p className="table-entries">
            <strong>
              Message:  
            </strong>
            {userMessage}
          </p>
        </div>
      </div>
    </>
  );
}
