import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CryptoContext from "../../context/CryptoContext";

function Navbar() {
  const { dispatch, theme } = useContext(CryptoContext);
  const handleSearchToggle = (e) => {
    dispatch({ type: "TOGGLE_SEARCH_MODE" });
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  const handleThemeToggle = () => {
    if (theme === "dark") {
      dispatch({ type: "TOGGLE_THEME", payload: "light" });
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      dispatch({ type: "TOGGLE_THEME", payload: "dark" });
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
  };

  return (
    <div className="">
      <div className="navbar    shadow-lg bg-base-300 text-primary  ">
        <div className="container mx-auto flex justify-between ">
          <Link
            to="/"
            className="flex justify-between items-center px-8 gap-2 btn btn-ghost "
          >
            <BiCoinStack className="text-5xl " />
            <h1 className=" text-3xl font-bold ">CRYPTEX</h1>
          </Link>

          <div className="flex mr-9 justify-between items-center ">
            <button
              className="btn btn-ghost text-xl"
              onClick={handleSearchToggle}
            >
              <FaSearch />
            </button>
            <div className=" hidden md:flex  items-center">
              <Link to="/" className="btn btn-ghost">
                Home
              </Link>
              <Link to="/about" className="btn btn-ghost">
                About
              </Link>
              <input
                type="checkbox"
                className="toggle toggle-lg "
                onChange={() => handleThemeToggle(theme)}
                value={theme}
                checked={theme === "dark" ? "checked" : ""}
              />
            </div>
            <button
              className="md:hidden btn btn-ghost text-xl"
              onClick={handleClick}
            >
              {!nav ? (
                <FaAlignJustify className="" />
              ) : (
                <FaRegWindowClose className="" />
              )}
            </button>
            <div className="md:hidden " onClick={handleClick}></div>
          </div>
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute z-10 bg-base-100 w-full h-full opacity-90  px-8"
        }
      >
        <li className=" bg-base-100 w-full flex flex-col items-center ">
          <Link
            to="/"
            className="btn btn-ghost"
            onClick={handleClose}
            duration={500}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost"
            onClick={handleClose}
            duration={500}
          >
            About
          </Link>
          <input
            type="checkbox"
            className="toggle toggle-lg "
            onChange={() => handleThemeToggle(theme)}
            value={theme}
            checked={theme === "dark" ? "checked" : ""}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
