import React, { useEffect, useContext } from "react";
import CryptoContext from "../../context/CryptoContext";

function Pagination() {
  const { dispatch, currentPage, assets } = useContext(CryptoContext);
  const pageNumbers = [];
  const assetsPerPage = 8;
  const totalAssets = assets.length;
  useEffect(() => {
    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentPageItems = assets.slice(indexOfFirstAsset, indexOfLastAsset);
    dispatch({ type: "SET_CURRENT_PAGE_ASSETS", payload: currentPageItems });
  }, [dispatch, currentPage]);
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
          className={`btn ${currentPage === number && "btn-primary"}`}
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
