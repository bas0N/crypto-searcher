import React, { useState, useContext } from "react";
import { searchAssets } from "../../context/CryptoActions";
import CryptoContext from "../../context/CryptoContext";
import { getMultipleAssets } from "../../context/CryptoActions";
import { useNavigate } from "react-router-dom";
const searchParams = [
  [],
  [{ order: "priceUsd" }, { dir: "asc" }],
  [{ order: "priceUsd" }, { dir: "dsc" }],
  [{ order: "changePercent24Hr" }, { dir: "asc" }],
  [{ order: "changePercent24Hr" }, { dir: "dsc" }],
];
function Search() {
  const [text, setText] = useState("");
  const { loading, dispatch, searchOrder } = useContext(CryptoContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  //ArrayComparison
  const compareArrays = (a, b) => JSON.stringify(a) === JSON.stringify(b);

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
  const navigate = useNavigate();

  const handleSelectSorting = (props) => {
    if (props.length === 0) {
      navigate({
        pathname: "/",
        search: ``,
      });
      dispatch({ type: "SET_SORT_PARAMS", payload: [] });
    }

    navigate({
      pathname: "/",
      search: `?order=${props[0].order}&dir=${props[1].dir}`,
    });
    dispatch({ type: "SET_SORT_PARAMS", payload: props });
    navigate(0);
  };
  if (loading) {
    return <div>loading</div>;
  }
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
              onChange={handleChange}
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
                className={
                  compareArrays(searchParams[0], searchOrder)
                    ? "bg-base-300 rounded-lg"
                    : ""
                }
                onClick={() => handleSelectSorting(searchParams[0])}
              >
                <a>Default </a>
              </li>
              <li
                className={
                  compareArrays(searchParams[1], searchOrder)
                    ? "bg-base-300 rounded-lg"
                    : ""
                }
                onClick={() => handleSelectSorting(searchParams[1])}
              >
                <a>Price (low-high) </a>
              </li>
              <li
                onClick={() => handleSelectSorting(searchParams[2])}
                className={
                  compareArrays(searchParams[2], searchOrder)
                    ? "bg-base-300 rounded-lg"
                    : ""
                }
              >
                <a>Price (high-low)</a>
              </li>
              <li
                onClick={() => handleSelectSorting(searchParams[3])}
                className={
                  compareArrays(searchParams[3], searchOrder)
                    ? "bg-base-300 rounded-lg"
                    : ""
                }
              >
                <a>% Change (low-high)</a>
              </li>
              <li
                onClick={() => handleSelectSorting(searchParams[4])}
                className={
                  compareArrays(searchParams[4], searchOrder)
                    ? "bg-base-300 rounded-lg"
                    : ""
                }
              >
                <a>% Change (high-low)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
