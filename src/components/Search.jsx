/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import searchIcon from "../assets/search.svg";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/features/filterSlice";

import "./Search.css";

export function Search() {
  let [search, setSearch] = useState("");

  let dispatch = useDispatch();

  let handleOnChange = (e) => {
    let value = e.target.value;

    setSearch(value);
  };

  let handleOnclick = () => {
    if (search == "") return;
    dispatch(setFilter({ name: search, region: "", filterByName: true }));
  };

  let handleOnKeyUp = (e) => {
    if (search == "") return;

    if (e.keyCode == 13) {
      dispatch(setFilter({ name: search, region: "", filterByName: true }));
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
