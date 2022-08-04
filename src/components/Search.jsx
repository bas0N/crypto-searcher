import React, { useState, useContext } from "react";
import { searchAssets } from "../context/CryptoActions";
import CryptoContext from "../context/CryptoContext";
import { getMultipleAssets } from "../context/CryptoActions";
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
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 ">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg pl-6 input-lg mr-6 flex-grow text-black"
              value={text}
              onChange={handleChange}
            ></input>
            <button type="submit" className="btn input-lg mr-3">
              Search
            </button>
            <button
              className={`btn ${
                text.length > 0 ? "" : "btn-disabled"
              } input-lg `}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
