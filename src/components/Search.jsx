import React from "react";

function Search() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <form>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg pl-6 input-lg mr-6 flex-grow"
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
