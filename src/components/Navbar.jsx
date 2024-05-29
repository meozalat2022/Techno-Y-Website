"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
} from "@/redux/category/categorySlice";
const Navbar = () => {
  const { error, loading, allCategories } = useSelector(
    (state) => state.category
  );
  console.log(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch(getCategoriesStart());
        const response = await fetch(
          "http://localhost:8000/backend/category/categories"
        );

        const data = await response.json();

        if (data.success === false) {
          dispatch(getCategoriesFailure(data));
          return;
        }

        dispatch(getCategoriesSuccess(data));
      } catch (error) {
        dispatch(getCategoriesFailure(error.message));
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="bg-accent flex gap-1 justify-end  h-24 items-center px-6 ">
      {allCategories.map((item) => (
        <p className="text-white font-bold p-2 w-28 hover:border border-md rounded-lg hover:translate-y-1 text-center">
          {item.title}
        </p>
      ))}
      <i className="ri-menu-line text-white font-bold text-3xl"></i>
    </div>
  );
};

export default Navbar;
