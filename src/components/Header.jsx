/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";

import { ButtonTheme } from "./ButtonTheme";
import ThemeContext from "../context/ThemeContext";

import "./Header.css";

export function Header() {
  let {isDark, setIsDark}=useContext(ThemeContext);
  return (
    <header className="header">
      <h1 className="header_text">Where in the world?</h1>
      <ButtonTheme theme={isDark} setTheme={setIsDark} />
    </header>
  );
}
