import React from 'react';
import './Category.css';
import { useDispatch, useSelector } from 'react-redux';
import { bookStatus } from '../redux/categories/categories';

const Category = () => {
  const selectedCategory = useSelector((state) => state.categories);
  const dispatchCategory = useDispatch();

  const btnCheckStatus = () => {
    dispatchCategory(bookStatus());
  };

return (
    <div className="Category">
      <div className="Category-text">
        <h2>{selectedCategory.Categories[0]}</h2>
        <button onClick={btnCheckStatus} type="button">Check status</button>
      </div>
    </div>
  );
};
export default Category;
