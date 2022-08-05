import React, { useState, useEffect, useContext } from "react";
import CryptoContext from "../context/CryptoContext";

function Pagination() {
  const { dispatch, currentPage, currentPageAssets, assets } =
    useContext(CryptoContext);
  const assetsPerPage = 8;
  const totalAssets = assets.length;
  useEffect(() => {
    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentPageAssets = assets.slice(indexOfFirstAsset, indexOfLastAsset);
    dispatch({ type: "SET_CURRENT_PAGE_ASSETS", payload: currentPageAssets });
  }, [dispatch, currentPage]);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalAssets / assetsPerPage); i++) {
    pageNumbers.push(i);
  }
  const setCurrentPage = (number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: number });
  };
  return (
    <div className="btn-group ">
      {pageNumbers.map((number) => (
        <button
          className={`btn ${currentPage === number && "btn-secondary"}`}
          key={number}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
