import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="card-title">{title}</h1>
      <p className="card-subtitle mb-3">{subtitle}</p>
    </>
  );
};

export default Header;
