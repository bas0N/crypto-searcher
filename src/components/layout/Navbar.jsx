import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar mb-12 justify-between w-screen shadow-lg bg-slate-800 ">
      <div className="container mx-auto flex justify-between">
        <Link
          to="/"
          className="flex justify-between items-center px-8 gap-2 btn btn-ghost"
        >
          <BiCoinStack className="text-xl text-slate-50" />
          <h1 className="text-slate-50 text-xl font-bold ">CRYPTEX</h1>
        </Link>

        <div className="flex mr-9 justify-between  ">
          <button className="btn btn-ghost text-xl">
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
