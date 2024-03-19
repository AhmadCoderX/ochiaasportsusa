import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal Regular'] flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="logo" className="h-[30px]" />
      </div>
      <div className="links flex gap-10">
        {["Home", "Contact Us", "Categories"].map((item, index) => (
          <a key={index} className="text-md font-light capitalize">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
