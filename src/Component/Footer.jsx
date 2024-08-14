import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-300 mt-5 flex justify-center">
      <div>
        <h1 className="text-center">FOLLOW US</h1>
        <div className="flex justify-center gap-3 py-3">
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-x-twitter"></i>
        </div>
        <i className="fa-regular fa-copyright"></i>
        <span>GamesBazaar</span>
      </div>
    </div>
  );
};

export default Footer;
