/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { useState } from "react";
import "./Search.css"; 

export function Search({ setValue }) {
  let [search, setSearch] = useState("");

  let validateString = (string) => {
    let regExp = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/gi;

    return regExp.test(string);
  };

  let handleOnChange = (e) => {
    let value = e.target.value;

    setSearch(value);
  };

  let handleOnclick = () => {
    if (validateString(search)) {
      setValue(search);
    } else {
      console.log("Valor no válido");
    }
  };
  let handleOnKeyUp = (e) => {

    if(search==""){
        setValue(search);
    }

    if (e.keyCode == 13) {
      setValue(search);
    } else {
      console.log("Valor no válido");
    }
  };

  return (
    <div className="search">
      <button onClick={handleOnclick} className="search_button">
        <img
          src="src/assets/search.svg"
          alt="icon search"
          className="search_image"
          
        />
      </button>
      <input
        type="text"
        className="search_input"
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
        value={search}
        placeholder="Search  for a country..."
      />
    </div>
  );
}
