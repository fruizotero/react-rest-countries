/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useContext, useState } from "react";

import SearchContext from "../context/SearchContext";

import searchIcon from "../assets/search.svg";

import "./Search.css";

export function Search() {

  let {setIsSearch, setStringSearch}=useContext(SearchContext);
  let [search, setSearch] = useState("");

  let handleOnChange = (e) => {
    let value = e.target.value;

    setSearch(value);
  };

  let handleOnclick = () => {

    if (search == "") return;

    setIsSearch(true);
    setStringSearch(search);
  };

  let handleOnKeyUp = (e) => {

    if (search == "") return;

    if (e.keyCode == 13) {
      setIsSearch(true);
      setStringSearch(search);
    }
  };

  return (
    <div className="search">
      <button onClick={handleOnclick} className="search_button">
        <img src={searchIcon} alt="icon search" className="search_image" />
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
