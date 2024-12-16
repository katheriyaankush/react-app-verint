import React from "react";
import { pageName } from "../../types/types";
import "./Header.css";

const Header: React.FC<pageName> = ({ currentPage, handleHome }) => {
  return (
    <div className="header">
      <p className="logo" onClick={handleHome}>
        StoreFront App
      </p>
      <div className="header-right">
        <div className="header-title">
          <button className="header-button-home" onClick={handleHome}>
            Home
          </button>
        </div>
        <div className="header-title">
          <p>{currentPage}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
