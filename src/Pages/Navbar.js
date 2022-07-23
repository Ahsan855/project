import React from "react";
import image from "../img/full hd_transparent_logo 1.jpg";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <img src={image} alt="" className="mb-[40px] mt-[20px]" />
      <hr />
    </div>
  );
};

export default Navbar;
