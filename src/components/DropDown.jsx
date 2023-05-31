/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./DropDown.css";

export function Dropdown({ setValue }) {
  let [hidden, setHidden] = useState(true);
  let [key, setKey] = useState("");
  let pathArrowRight = "src/assets/chevron-right.svg";
  let pathArrowDown = "src/assets/chevron-down.svg";

  const handleToggleMenu = () => setHidden(!hidden);

  const handleOnClick = (e) => {
    let buttonKey = e.target.dataset.key;
    setKey(buttonKey);
    let value = e.target.dataset.value;
    setValue(value);
    handleToggleMenu();
  };

  //TODO::Refactorizar
  
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggleMenu}>
        <span className="dropdown-toggle-text">Filter by Region</span>
        <div className="dropdow_image-conainer">
          <img
            src={hidden ? pathArrowRight : pathArrowDown}
            alt="Icon arrow"
            className="dropdown_image"
          />
        </div>
      </button>
      <ul className={`dropdown-menu ${hidden && "hidden"}`}>
        <li>
          <button
            data-key="1"
            className={`menu-button ${key == "1" ? "active" : ""}`}
            data-value="africa"
            onClick={handleOnClick}
          >
            Africa
          </button>
        </li>
        <li>
          <button
            data-key="2"
            className={`menu-button ${key == "2" ? "active" : ""}`}
            data-value="americas"
            onClick={handleOnClick}
          >
            America
          </button>
        </li>
        <li>
          <button
            data-key="3"
            className={`menu-button ${key == "3" ? "active" : ""}`}
            data-value="asia"
            onClick={handleOnClick}
          >
            Asia
          </button>
        </li>
        <li>
          <button
            data-key="4"
            className={`menu-button ${key == "4" ? "active" : ""}`}
            data-value="europe"
            onClick={handleOnClick}
          >
            Europe
          </button>
        </li>
        <li>
          <button
            data-key="5"
            className={`menu-button ${key == "5" ? "active" : ""}`}
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
