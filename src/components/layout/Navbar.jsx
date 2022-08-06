import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CryptoContext from "../../context/CryptoContext";

function Navbar() {
  const { dispatch, theme } = useContext(CryptoContext);
  const handleSearchToggle = (e) => {
    dispatch({ type: "TOGGLE_SEARCH_MODE" });
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

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
    <div className="navbar mb-6 justify-between w-full shadow-lg bg-base-300 text-primary ">
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
      </div>
    </div>
  );
}

export default Navbar;
