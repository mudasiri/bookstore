import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categoriesSlice';

function Categories() {
  const categories = useSelector((state) => state.categories.checkStatus);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button type="button" onClick={() => dispatch(status())}>Check status...</button>
      <h3>{categories}</h3>
    </div>
  );
}

export default Categories;
