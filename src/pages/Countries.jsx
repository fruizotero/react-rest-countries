/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { CountryCard } from "../components/CountryCard";
import { Search } from "../components/Search";
import { Dropdown } from "../components/DropDown";
import PaginationElements from "../components/Pagination";
import { Message } from "../components/Message";

export function Countries({ setValue, setRegion, data }) {
  let { dataCountries, isLoading, error } = data;

  function RenderItems({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((country, index) => (
            <CountryCard data={country} key={index} />
          ))}
      </>
    );
  }

  return (
    <section className="countries">
      <div className="countries_top">
        <Search setValue={setValue} />
        <Dropdown setValue={setRegion} />
      </div>
      <div className="countries_main">
        {isLoading ? (
          <div className="container-spinner">
            <CircularProgress />
          </div>
        ) : (
          ""
        )}
        {dataCountries && (
          <PaginationElements
            data={dataCountries}
            itemsPerPage={10}
            Render={RenderItems}
          />
        )}
        {error && error.err ? (
          <Message message={error.statusText} error={error.status} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
