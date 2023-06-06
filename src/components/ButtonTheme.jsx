/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun-fill.svg";

import "./ButtonTheme.css";


export function ButtonTheme({ theme, setTheme }) {

  return (
    <button className="theme-btn" onClick={() => setTheme(!theme)}>
      <div className="theme-icon-container">
        <img
          src={theme ? sunIcon : moonIcon}
          alt="Icon button theme"
          className="theme-icon"
        />
      </div>
      <span className="theme-text">{theme ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
