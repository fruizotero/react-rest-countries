/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { ButtonTheme } from "./ButtonTheme";

export function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <ButtonTheme theme={theme} setTheme={setTheme} />
    </header>
  );
}
