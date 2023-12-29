import * as React from "react";
import { useState } from "react";
import CartNav from "../Navigator/CartNav";
import Header from "../Navigator/Header";
import CheckoutTable from "../Table.js/CheckoutTable";

export default function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const [userMessage, setUserMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipError, setZipError] = useState("");

  // const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError("");
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCityError("");
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
    setZipError("");
  };
  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  // const handleCheckout = () => {
  //   dispatch(clearCart());
  // };
  const validateForm = () => {
    let isValid = true;

    if (!firstName) {
      setFirstNameError("Please enter your first name.");
      isValid = false;
    }

    if (!lastName) {
      setLastNameError("Please enter your last name.");
      isValid = false;
    }
    if (!address) {
      setAddressError("Please enter your House address.");
      isValid = false;
    }
    if (!city) {
      setCityError("Please enter your City.");
      isValid = false;
    }

    if (!zip) {
      setZipError("Please enter your Zip code.");
      isValid = false;
    }
    if (!email) {
      setEmailError("Please enter your email address.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("FirstName", firstName);
      localStorage.setItem("email", email);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("userMessage", userMessage);
      localStorage.setItem("address", address);
      localStorage.setItem("city", city);
      localStorage.setItem("zip", zip);
      window.location.href = "/details";
    }
  };
  return (
    <div>
      <Header />
      <CartNav />
      <div className="checkout-form">
        <form onSubmit={handleFormSubmit} className="form-inputs">
          <label>
            <h1 className="enter-text">Please enter your details below:</h1>
            <div className="form-modal">
              <label className="form-label">First Name: </label>
              <input
                type="text"
                value={firstName}
                onChange={handleInputChange}
                className="form-input"
              />
              {firstNameError && (
                <p className="error-message">{firstNameError}</p>
              )}

              <label className="form-label">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="form-input"
              />
              {lastNameError && (
                <p className="error-message">{lastNameError}</p>
              )}
              <label className="form-label">Email:</label>

              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="form-input"
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <label className="form-label">Address:</label>

              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="form-input"
              />
              {addressError && <p className="error-message">{addressError}</p>}

              <label className="form-label">City:</label>

              <input
                type="text"
                value={city}
                onChange={handleCityChange}
                className="form-input"
              />
              {cityError && <p className="error-message">{cityError}</p>}

              <label className="form-label">Zip:</label>

              <input
                type="text"
                value={zip}
                onChange={handleZipChange}
                className="form-input"
              />
              {zipError && <p className="error-message">{zipError}</p>}
              <label className="form-label">Order notes (optional)</label>

              <input
                type="text"
                value={userMessage}
                onChange={handleMessageChange}
                className="form-input"
              />

              <button type="submit" className="form-submit">
                Submit
              </button>
            </div>
          </label>
        </form>
        <div className="checkout-table">
          <CheckoutTable />
        </div>
      </div>
    </div>
  );
}
