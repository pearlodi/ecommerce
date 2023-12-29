import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
width:800,
height:700,
  // border: '2px solid #000',
  boxShadow: 24,
  align: 'center',
  backgroundColor:'#fff',
  borderRadius:20,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
    setUserNameError('');
  };
  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (!userName) {
      setUserNameError('Please enter your first name.');
      isValid = false;
    }

    if (!lastName) {
      setLastNameError('Please enter your last name.');
      isValid = false;
    }
   
    if (!email) {
      setEmailError('Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
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
      localStorage.setItem('userName', userName);
      localStorage.setItem('email', email);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('userMessage', userMessage);
      window.location.href = '/details';
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Checkout</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} className='red'>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <form onSubmit={handleFormSubmit} className='form-inputs'>
      <Button onClick={handleClose} className='closeModal'><CloseIcon /></Button>

                <label>
                  <p className='enter-text'>

                  Please enter your details below:

                  </p>
                  <div className="form-modal">
                    <label className="form-label">First Name</label>
                    <input type="text" value={userName} onChange={handleInputChange} className="form-input"  />
                    {userNameError && <p className="error-message">{userNameError}</p>}
                    <label className="form-label">Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastNameChange} className="form-input"  />
                    {lastNameError && <p className="error-message">{lastNameError}</p>}
                    <label className="form-label">Email Address</label>

                    <input type="text" value={email} onChange={handleEmailChange} className="form-input"  />
                    {emailError && <p className="error-message">{emailError}</p>}
                    {/* <label className="form-label">Message</label> */}
                    {/* <input type="text-area" value={userMessage} onChange={handleMessageChange} className="form-message"  /> */}
                    <button type="submit" className="form-submit">
                  Submit
                </button>
                  </div>
                 
                </label>
              
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
