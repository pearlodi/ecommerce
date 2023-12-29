import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/CartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
};

export default function BasicModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cart = useSelector((state) => state.cart.cart);
  const selectedCategory = useSelector((state) => state.cart.selectedCategory);
  const selectedPrice = useSelector((state) => state.cart.selectedPrice);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  
  if (
    (selectedCategory && item.category !== selectedCategory) ||
    (selectedPrice && item.price !== selectedPrice)
  ) {
    return null;
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <RemoveRedEyeOutlinedIcon style={{color: 'white'}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modals"
      >
        <Box sx={style}>
          <div className="modal-content">
            <div className="modal-img">
              <img src={item.image} alt={item.title} className="modal--img" />
            </div>

            <div className="modal-details">

              <Typography id="modal-modal-title" variant="h6" component="h2">

                <h1 className="modal-category">{item.class}</h1>
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {/* <p className="modal-title">{item.title}</p> */}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>Price: ${item.price}</p>
              </Typography>
              <div className="hr"></div>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p className="modal-description">{item.description}</p>
              </Typography>

              <div className="modal-btns">
                {cart.some((x) => x.id === item.id) ? (
                  <p
                    onClick={() => removeItemFromCart(item)}
                    className="modal-btn-cart"
                  >
                    Remove from cart
                    <ShoppingCartIcon style={{ width: 15 }} />
                  </p>
                ) : (
                  <p
                    onClick={() => addItemToCart(item)}
                    className="modal-add-cart"
                  >
                    Add to cart
                    <ShoppingCartIcon style={{ width: 15 }} />
                  </p>
                )}

              </div>

            </div>
          <div onClick={handleClose} className="close-modals">x</div>

          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="modal-review">
              <h1>Reviews</h1>
              <p className="">{item.review}</p>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
