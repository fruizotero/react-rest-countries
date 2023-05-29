/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import { CountryCard } from "../components/CountryCard";
import { Search } from "../components/Search";
import { Dropdown } from "../components/DropDown";
import PaginationElements from "../components/Pagination";

export function Countries({ setValue, setRegion, countries, page }) {

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
        <Dropdown setValue={setRegion}/>
      </div>
      <div className="countries_main">
        {countries && (
          <PaginationElements data={countries} itemsPerPage={10} Render={RenderItems} />
        )}
      </div>
    </section>
  );
}
