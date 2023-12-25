import React from 'react';
import BasicTable from './UserTable';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logoImage from '../assets/img/logo.png';
import { useSelector } from 'react-redux';
import Header from './Header';
import { useEffect, useState } from 'react';
import { clearCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';


const UserDetails = () => {
  // Retrieve the data from local storage
  const storedData = localStorage.getItem('userName');
  const email = localStorage.getItem('email');
  const lastName = localStorage.getItem('lastName');
  const userMessage = localStorage.getItem('userMessage');
  const [currentDate, setCurrentDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  const cart = useSelector((state) => state.cart.cart);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    const pdfStyling = {
      margin: 10,
      fontSize: 12,
      fontType: 'times', // Font type (default is 'times')
      textColor: 'red', // Text color (default is 'black')
    };
    const logoWidth = 50; // Width of the logo in the PDF
    const logoHeight = 20;

    doc.addImage(logoImage, 'PNG', pdfStyling.margin, pdfStyling.margin + 40, logoWidth, logoHeight);

    doc.addImage(logoImage, 'PNG', pdfStyling.margin, pdfStyling.margin + 40, logoWidth, logoHeight);

    doc.setFont(pdfStyling.fontType);
    doc.setFontSize(pdfStyling.fontSize);
    doc.setTextColor(pdfStyling.textColor);

    doc.text(`First name: ${storedData}`, pdfStyling.margin, pdfStyling.margin);
    doc.text(`Last name: ${email}`, pdfStyling.margin, pdfStyling.margin + 10);
    doc.text(`Price: ${lastName}`, pdfStyling.margin, pdfStyling.margin + 20);
    doc.text(`Total: ${userMessage}`, pdfStyling.margin, pdfStyling.margin + 30);

    const tableColumn = ["Title", "Price (g)", "Total (g)"];
    const tableRows = [];

    for (const item of cart) {
      const imgWidth = 50; // Width of the image in the PDF
      // const logoHeight = 20;
     
      const rowData = [
        item.title,
        item.price,
      '', // Placeholder for the image
        item.total,
      ];

      doc.addImage(item.image, 'JPEG', pdfStyling.margin, pdfStyling.margin, imgWidth, 20);

      tableRows.push(rowData);
    }

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: pdfStyling.margin + 20,
    });

    doc.save('userDetails.pdf');
  };

  const handleCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
    <Header />
    <NavLink to="/product">
    <div onClick={handleCart}>Back to cart</div>
    </NavLink>
      <div className='table'>
        <div>        <h1 className='recieved'>Thanks {storedData}....Your order has been recieved</h1>

        <div>
      <div className='recieved-order'>
        <p className='order-period'><strong className='strong-order'>Tracking number:</strong> 78448</p>
        <p className='order-period'><strong className='strong-order'>Date: </strong>{formatDate(currentDate)}</p>
        <p className='order-period'><strong className='strong-order'>Payment Method:</strong> Direct Bank Transfer</p>
        
      </div>
    </div>
    <div className='table-data'>
    <p className='table-datas'><strong>Name: </strong>{storedData}</p>
    </div>
      <div className='table-data'>
      <p className='table-datas'><strong>Email:</strong> {email}</p>
      <p className='table-datas'><strong>Address:</strong> {lastName}</p>
      </div>
      </div>

      <BasicTable />

      <button onClick={handleDownloadPDF} className='download'>Download Reciept</button>
      </div>

    </>
  );
};

export default UserDetails;
