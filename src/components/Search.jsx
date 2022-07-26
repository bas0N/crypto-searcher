import React from "react";

function Search() {
  return (
    <div>
      <div>
        <form>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg pl-6"
            ></input>
            <button type="submit" className="btn "></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
