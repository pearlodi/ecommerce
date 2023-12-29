import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../redux/CartSlice";
import AdjustIcon from "@mui/icons-material/Adjust";

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const filterItemsByCategory = (category) => {
    dispatch(setCategoryFilter(category));
  };
  

  return (
    <div className="category-buttons">
      <div className="">
        <p className="categories-filter">Catogories</p>
        <p className="fliters" onClick={() => filterItemsByCategory(null)}>
          {" "}
          <AdjustIcon style={{ color: "black" }} /> All
        </p>
      </div>
      <div className="filter-btn">
        <p className="fliters" onClick={() => filterItemsByCategory("gowns")}>
          {" "}
          <AdjustIcon style={{ color: "black" }} /> Gowns
        </p>
      </div>
      <div className="filter-btn">
        <p className="fliters" onClick={() => filterItemsByCategory("pants")}>
          {" "}
          <AdjustIcon style={{ color: "black" }} /> Two pieces
        </p>
      </div>
      <div className="filter-btn">
        <p className="fliters" onClick={() => filterItemsByCategory("shorts")}>
          {" "}
          <AdjustIcon style={{ color: "black" }} /> Shorts
        </p>
      </div>
    </div>
  );
};

export default CategoryFilter;
