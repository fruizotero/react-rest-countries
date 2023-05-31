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

  let regions = [
    { value: "africa", text: "Africa" },
    { value: "americas", text: "America" },
    { value: "asia", text: "Asia" },
    { value: "europe", text: "Europe" },
    { value: "oceania", text: "Oceania" },
  ];
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
        
        {regions.map((el, index) => {
          let { value, text } = el;
          let keyElement= index.toString();
          return (
            <li key={keyElement}>
              <button
                data-key={keyElement}
                className={`menu-button ${key == keyElement ? "active" : ""}`}
                data-value={value}
                onClick={handleOnClick}
              >
                {text}
              </button>
            </li>
          );
        })}
       
      </ul>
    </div>
  );
}
