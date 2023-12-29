import React from "react";
import { useDispatch } from "react-redux";
import { setColorFilter } from "../../redux/CartSlice";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";

const ColorFilter = () => {
  const dispatch = useDispatch();

  const filterItemsByColor = (color) => {
    dispatch(setColorFilter(color));
  };

  return (
    <>
       <div className="filters-color-btn">
        <p>Colors:</p>
     
      </div>
   
    <div className="color-filter-button">
      <div className="color-filter-tag">
        <div className="fliters" onClick={() => filterItemsByColor("pink")}>
          {" "}
          <Brightness1Icon style={{ color: "#C13F7E" }} /> 
          <div className="color-name">
          Pink
          </div>
        </div>
      </div>
      <div className="color-filter-tag">
        <div className="fliters" onClick={() => filterItemsByColor("white")}>
          {" "}
          <Brightness1OutlinedIcon style={{ color: "black" }} /> 
          <div className="color-name">
          White
          </div>
        </div>
      </div>
      <div className="color-filter-tag">
        <div className="fliters" onClick={() => filterItemsByColor("brown")}>
          {" "}
          <Brightness1Icon style={{ color: "#822F2C" }} /> 
          <div className="color-name">
          Brown
          </div>
        </div>
      </div>
      <div className="color-filter-tag">
        <div className="fliters" onClick={() => filterItemsByColor("green")}>
          {" "}
          <Brightness1Icon style={{ color: "green" }} /> 
          <div className="color-name">
          Green
          </div>
        </div>
      </div>
      <div className="color-filter-tag">
        <div className="fliters" onClick={() => filterItemsByColor("blue")}>
          {" "}
          <Brightness1Icon style={{ color: "#8795A4" }} /> 
          <div className="color-name">
          Blue
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ColorFilter;
