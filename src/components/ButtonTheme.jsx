/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./ButtonTheme.css";
export function ButtonTheme({ theme, setTheme }) {
  const pathMoon = "src/assets/moon.svg";
  const pathSun = "src/assets/sun-fill.svg";

  return (
    <button className="theme-btn" onClick={() => setTheme(!theme)}>
      <div className="theme-icon-container">
        <img
          src={theme ? pathSun : pathMoon}
          alt="Icon button theme"
          className="theme-icon"
        />
      </div>
      <span className="theme-text">{theme ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
