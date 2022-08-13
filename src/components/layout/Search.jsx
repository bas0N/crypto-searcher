import React, { useState, useContext } from "react";
import { searchAssets } from "../../context/CryptoActions";
import CryptoContext from "../../context/CryptoContext";
import { getMultipleAssets } from "../../context/CryptoActions";
function Search() {
  const [text, setText] = useState("");
  const { assets, loading, dispatch } = useContext(CryptoContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      dispatch({ type: "SET_LOADING" });
      const execute = async () => {
        const searchResults = await searchAssets(text);
        dispatch({ type: "GET_MULTIPLE_ASSETS", payload: searchResults.data });
      };
      execute();
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    setText("");

    const execute = async () => {
      const assets = await getMultipleAssets();

      dispatch({ type: "GET_MULTIPLE_ASSETS", payload: assets.data });
    };
    execute();
  };
  const [message, setMessage] = useState("esa");

  const handleSelectSorting = (props) => {
    console.log(props);
  };
  if (loading) {
    return <div>loading</div>;
  }
  const az = "az";
  return (
    <div>
      <div className="  items-center md:grid md:grid-cols-2 gap-9  container mx-auto mt-6">
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col justify-center lg:flex-row ">
            <input
              type="text"
              placeholder="Search"
              className="  input input-lg input-primary lg:mr-6 flex-grow text-accent-content bg-base-300"
              value={text}
              onChange={handleSubmit}
            ></input>
            <button
              type="submit"
              className="  btn btn-primary input-lg lg:mr-3 mt-3 lg:mt-0"
            >
              Search
            </button>
            <button
              className={`btn  ${
                text.length > 0 ? "btn-primary" : "btn-disabled"
              } input-lg mt-3 lg:mt-0`}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
        <div className="flex  justify-center lg:justify-start">
          <div class="dropdown flex w-3/12  mt-3 lg:mt-0 ">
            <label tabindex="0" class="btn">
              Sort by:
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li
                onClick={() =>
                  handleSelectSorting([{ order: "alphabetic" }, { dir: "asc" }])
                }
              >
                <a>Name (A-Z)</a>
              </li>
              <li
                onClick={() =>
                  handleSelectSorting([
                    { order: "alphabetic" },
                    { dir: "desc" },
                  ])
                }
              >
                <a>Name (A-Z)</a>
              </li>
              <li
                onClick={() =>
                  handleSelectSorting([{ order: "price" }, { dir: "asc" }])
                }
              >
                <a>Price (low-high) </a>
              </li>
              <li
                onClick={() =>
                  handleSelectSorting([{ order: "price" }, { dir: "desc" }])
                }
              >
                <a>Price (high-low)</a>
              </li>
              <li>
                <a>% Change (high-low)</a>
              </li>
              <li>
                <a>% Change (low-low)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
