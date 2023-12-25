import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter } from '../redux/CartSlice';
import AdjustIcon from '@mui/icons-material/Adjust';

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const filterItemsByCategory = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <div className="category-buttons">
      <div className='filter-btn'><p>Catogories</p>
      <p className='fliters' onClick={() => filterItemsByCategory(null)}> <AdjustIcon /> All</p>
      </div>
      <div className='filter-btn'>

      <p className='fliters' onClick={() => filterItemsByCategory('gowns')}> <AdjustIcon /> Gowns</p>
      </div>
      <div className='filter-btn'>

      <p className='fliters' onClick={() => filterItemsByCategory('pants')}> <AdjustIcon /> Two pieces</p>
      </div>
      {/* <div className='filter-btn'>

      <p className='fliters' onClick={() => filterItemsByCategory('skirts')}> <AdjustIcon /> Skirts</p>
      </div> */}
      <div className='filter-btn'>

      <p className='fliters' onClick={() => filterItemsByCategory('jacket')}> <AdjustIcon /> Tops</p>

</div>

      


    </div>
  );
};

export default CategoryFilter;
