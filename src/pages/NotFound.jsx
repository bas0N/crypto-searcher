import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className=" card mx-auto my-auto bg-base-300 text-primary-content rounded-lg ">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-9xl   my-6 text-primary">#404</h1>
        <h3 className="text-2xl  font-bold mt-3">PAGE NOT FOUND</h3>
        <Link to="/" className="btn btn-ghost my-9">
          Back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
