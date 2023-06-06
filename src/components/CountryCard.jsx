/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CountryCard.css";

export function CountryCard({ data }) {
  let { name, population, region, capital, flags } = data;

  let { common } = name;
  let [cap] = capital ?? "-";

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
        <h4 className="country_info_name">
          {common.length > 15 ? `${common.substring(0, 15)}...` : common}
        </h4>
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
            <p className="country_info_value">{cap}</p>
          </div>
        </div>
      </div>

      <Link to={`/country/${name.common}`} className="country_link_details">
        More Details
      </Link>
    </article>
  );
}
