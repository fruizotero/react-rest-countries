/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export function Main({ children }) {
    const {theme}= useContext(ThemeContext);
  return <main className="main" style={theme} >{children}</main>;
}
