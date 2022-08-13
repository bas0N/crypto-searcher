import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full bg-base-300 text-primary py-2 px-2">
      <div className="max-w-[1240px] mx-auto my-6 grid grid-cols-2 lg:grid-cols-4 ">
        <div className="col-span-2 px-20 py-6 ">
          <div className="flex items-center">
            <RiCopperCoinFill className="font-extrabold text-9xl" />
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold ">CRYPTEX</h1>
              <h3 className="font-bold ">Trusted crypto solutions</h3>
            </div>
          </div>
        </div>
        <div className="mx-auto ">
          <h6 className="font-bold uppercase text-xl pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div className="mx-auto">
          <h6 className="font-bold uppercase pt-2 text-xl">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
