/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export function CountryCard({ data }) {
  let { name } = data;
  return (
    <article className="country">
      <h4>{name.common}</h4>
      <Link to={`/${name.common}`}>Detalles</Link>
    </article>
  );
}
