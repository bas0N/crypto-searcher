import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CryptoContext from "../../context/CryptoContext";
function Navbar() {
  const { dispatch } = useContext(CryptoContext);
  const handleSearchToggle = (e) => {
    dispatch({ type: "TOGGLE_SEARCH_MODE" });
  };

  return (
    <div className="navbar mb-6 justify-between w-full shadow-lg bg-slate-800 ">
      <div className="container mx-auto flex justify-between ">
        <Link
          to="/"
          className="flex justify-between items-center px-8 gap-2 btn btn-ghost "
        >
          <BiCoinStack className="text-5xl text-slate-50" />
          <h1 className="text-slate-50 text-3xl font-bold ">CRYPTEX</h1>
        </Link>

        <div className="flex mr-9 justify-between  ">
          <button
            className="btn btn-ghost text-xl"
            onClick={handleSearchToggle}
          >
            <FaSearch />
          </button>
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
