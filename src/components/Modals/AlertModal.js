import { removeFromCart } from "../../redux/CartSlice";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import Warning from "../../assets/img/warning.png";
import Delete from "@mui/icons-material/Delete";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
};

const BasicModal = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeFromCart(item));
    handleClose(); // Close the modal after removing the item
  };

  return (
    <div className="delete">
      <div onClick={handleOpen} >
    <Delete />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modals"
      >
        <Box sx={style} className="alert-modal">
        <img src={Warning} alt="alert" />
          <Typography id="modal-modal-description" className="alert-title" sx={{ mt: 2 }}>
            Are you sure you want to remove {item.title}? You can always add it back if you want.
          </Typography>
          <div className="alert-btns">
            <button onClick={handleClose} className="alert-cancel">Cancel</button>
            <button onClick={removeItem}  className="alert-remove">Remove</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
