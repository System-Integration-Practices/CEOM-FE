import React from "react";
import "../css/components/Header.css";

const Header = ({ className }) => {
  return (
    <header className={`header__container ${className}`}>
      <img src="/assets/icons/logo.svg" alt="" />
      <h1>CEO MEMO</h1>
    </header>
  );
};

export default Header;
