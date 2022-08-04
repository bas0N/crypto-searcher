import React, { useState, useContext } from "react";
import CryptoContext from "../context/CryptoContext";
function Search() {
  const [text, setText] = useState("");
  const { assets, loading } = useContext(CryptoContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
    }
  };
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg pl-6 input-lg mr-6 flex-grow"
              value={text}
              onChange={handleChange}
            ></input>
            <button type="submit" className="btn input-lg mr-3">
              Search
            </button>
            <button className="btn btn-disabled input-lg ">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
