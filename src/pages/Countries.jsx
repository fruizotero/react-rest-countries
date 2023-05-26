/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PaginatedItems } from "../components/PaginatedItems";
import { useFetch } from "../hooks/useFetch";
import { CountryCard } from "../components/CountryCard";

export function Countries(params) {
  let { data, isLoading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

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
        <h3>Search</h3>
        <h3>Filter</h3>
      </div>
      <div className="countries_main">
        {data && (
          <PaginatedItems
            itemsPerPage={10}
            items={data}
            RenderItems={RenderItems}
          />
        )}
      </div>
    </section>
  );
}
