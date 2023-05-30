/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./DropDown.css";

export function Dropdown({ setValue }) {
  let [hidden, setHidden] = useState(true);
  let pathArrowRight = "src/assets/chevron-right.svg";
  let pathArrowDown = "src/assets/chevron-down.svg";

  const handleToggleMenu = (e) => setHidden(!hidden);

  const handleOnClick = (e) => {
    let value = e.target.dataset.value;
    setValue(value);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggleMenu}>
        <span className="dropdown-toggle-text">Filter by Region</span>
        <div className="dropdow_image-conainer">
          <img src={hidden? pathArrowRight:pathArrowDown} alt="Icon arrow" className="dropdown_image" />
          </div>
      </button>
      <ul
        className={`dropdown-menu ${hidden && "hidden"}`}
      >
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
