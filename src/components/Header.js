import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <h1 class="card-title">{title}</h1>
      <p class="card-subtitle mb-3">{subtitle}</p>
    </>
  );
};

export default Header;
