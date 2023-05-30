/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import "./DropDown.css"

export function Dropdown({ setValue }) {
  const handleOnClick = (e) => {
    let value = e.target.dataset.value;
    setValue(value);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">
        <span className="dropdown-toggle-text">Filter By Region</span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="menu-button"
            data-value="africa"
            onClick={handleOnClick}
          >
            Africa
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            data-value="americas"
            onClick={handleOnClick}
          >
            America
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            data-value="asia"
            onClick={handleOnClick}
          >
            Asia
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            data-value="europe"
            onClick={handleOnClick}
          >
            Europe
          </button>
        </li>
        <li>
          <button
            className="menu-button"
            data-value="oceania"
            onClick={handleOnClick}
          >
            Oceania
          </button>
        </li>
      </ul>
    </div>
  );
}
