import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className=" card mx-auto my-auto bg-slate-800 rounded-lg text-white ">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-9xl border-b-2 border-slate-400 my-6">
          #404
        </h1>
        <h3 className="text-2xl text-slate-400 font-bold mt-3">
          PAGE NOT FOUND
        </h3>
        <Link to="/" className="btn btn-ghost my-9">
          Back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
