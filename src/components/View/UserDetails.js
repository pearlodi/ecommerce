import React from "react";

import Product from "../Table.js/UserTable";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";
import Header from "../Navigator/Header";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Footer from "../Navigator/Footer";

const UserDetails = () => {
  const storedData = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const lastName = localStorage.getItem("lastName");
  const userMessage = localStorage.getItem("userMessage");
  const [currentDate, setCurrentDate] = useState(new Date());

  // const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const cart = useSelector((state) => state.cart.cart);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    const pdfStyling = {
      margin: 10,
      fontSize: 12,
      fontType: "times", // Font type (default is 'times')
      textColor: "black", // Text color (default is 'black')
    };
    // const logoWidth = 50; // Width of the logo in the PDF
    // const logoHeight = 20;

    // doc.addImage(
    //   logoImage,
    //   "PNG",
    //   pdfStyling.margin,
    //   pdfStyling.margin + 0,
    //   logoWidth,
    //   logoHeight
    // );  // doc.addImage(
    //   logoImage,
    //   "PNG",
    //   pdfStyling.margin,
    //   pdfStyling.margin + 40,
    //   logoWidth,
    //   logoHeight
    // );

    const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  
    doc.setFont(pdfStyling.fontType);
    doc.setFontSize(pdfStyling.fontSize);
    doc.setTextColor(pdfStyling.textColor);

    doc.text(`First name: ${storedData}`, pdfStyling.margin, pdfStyling.margin);
    doc.text(`Last name: ${email}`, pdfStyling.margin, pdfStyling.margin + 10);
    doc.text(`Price: ${lastName}`, pdfStyling.margin, pdfStyling.margin + 20);
    doc.text(
      `Message: ${userMessage}`,
      pdfStyling.margin,
      pdfStyling.margin + 30
    );

    const tableColumn = ["Title", "Price (g)", "Total (g)"];
    const tableRows = [];

    for (const item of cart) {
      // const imgWidth = 50;
      const rowData = [
        item.title,
        item.price,
        total,
      ];

      // doc.addImage(
      //   item.image,
      //   "JPEG",
      //   pdfStyling.margin,
      //   pdfStyling.margin,
      //   imgWidth,
      //   20
      // );

      tableRows.push(rowData);
    }

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: pdfStyling.margin + 40,
    });

    doc.save("userDetails.pdf");
  };

  return (
    <>
      <Header />
      <NavLink to="/product"></NavLink>
      <div className="table">
        <div>
          {" "}
          <h1 className="recieved">
            Thanks {storedData}....Your order has been recieved
          </h1>
          <div>
            <div className="recieved-order">
              <p className="order-period">
                <strong className="strong-order">Tracking number:</strong> 78448
              </p>
              <p className="order-period">
                <strong className="strong-order">Date: </strong>
                {formatDate(currentDate)}
              </p>
              <p className="order-period">
                <strong className="strong-order">Payment Method:</strong> Direct
                Bank Transfer
              </p>
            </div>
          </div>
          {/* <div className="table-data">
            <p className="table-datas">
              <strong>Name: </strong>
              {storedData} {lastName}
            </p>
          </div> */}
          {/* <div className="table-data">
            <p className="table-datas">
              <strong>Email:</strong> {email}
            </p>
            <p className="table-datas">
              <strong>Address:</strong> {address}
            </p>
          </div> */}
        </div>
        <br></br>
        <Product />
       

        <button onClick={handleDownloadPDF} className="download">
          Download Reciepts
        </button>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default UserDetails;
