/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CountryCard.css";
import styled from "styled-components";

export function CountryCard({ data }) {
  let { name, population, region, capital, flags } = data;

  let { common } = name;
  let [cap] = capital ?? "-";

  let style={
    padding:"1rem",
    paddingTop:"0rem",
    color:"var(--text-color)",
    fontWeight:"bold",
    textDecoration:"underline"
  };

  return (
    <article className="country">
      <div className="country_flag">
        <img
          src={flags.svg ? flags.svg : flags.png}
          alt={flags.alt}
          className="country_flag_image"
        />
      </div>
      <div className="country_info">
        <h4 className="country_info_name">{common}</h4>
        <div className="country_info_details">
          <div className="country_info_detail">
            <p className="country_info_title">Population:</p>
            <p className="country_info_value">{population}</p>
          </div>
          <div className="country_info_detail">
            <p className="country_info_title">Region:</p>
            <p className="country_info_value">{region}</p>
          </div>
          <div className="country_info_detail">
            <p className="country_info_title">Capital:</p>
            <p className="country_info_value">
              {cap}
            </p>
          </div>
        </div>
      </div>

      <Link to={`/${name.common}`} style={style}>More Details</Link>
    </article>
  );
}
