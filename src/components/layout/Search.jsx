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
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className=" flex flex-col items-center md:grid md:grid-cols-2 gap-9 justify-center container mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col justify-center md:flex-row ">
            <input
              type="text"
              placeholder="Search"
              className="  input input-lg input-primary mr-6 flex-grow text-accent-content bg-base-300"
              value={text}
              onChange={handleChange}
            ></input>
            <button type="submit" className="  btn btn-primary input-lg mr-3">
              Search
            </button>
            <button
              className={`btn  ${
                text.length > 0 ? "btn-primary" : "btn-disabled"
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
