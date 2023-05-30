/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Message } from "../components/Message";

import "./Country.css"

export function Country() {
  let { country } = useParams();
  let navigate = useNavigate();
  let url = `https://restcountries.com/v3.1/name/`;
  let { data, isLoading, error } = useFetch(`${url}${country}`);
  let countriesCode = JSON.parse(sessionStorage.getItem("codes"));

  let details = {
    name: data && data[0].name,
    tld: data && data[0].tld,
    population: data && data[0].population,
    currencies: data && data[0].currencies,
    region: data && data[0].region,
    subregion: data && data[0].subregion,
    languages: data && data[0].languages,
    capital: data && data[0].capital,
    borders: data && data[0].borders,
    flags: data && data[0].flags,
  };

  const handleGoBack = () => navigate(-1);
  const nativeName = () => {
    let key, value;
    Object.entries(details.name.nativeName ?? {}).forEach((entry) => {
      key = entry[0];
      value = entry[1];
    });

    return <>{value["common"]}</>;
  };

  const currencies = () => {
    let key,
      value = [];
    Object.entries(details.currencies ?? {}).forEach((entry) => {
      value.push(entry[1]["name"]);
    });

    return <>{value.join(", ")}</>;
  };

  const languages = () => {
    let key,
      value = [];
    Object.entries(details.languages ?? {}).forEach((entry) => {
      value.push(entry[1]);
    });

    return <>{value.join(", ")}</>;
  };

  return (
    <article className="country_page">
      <div className="country_top">
        <button className="country_button-goback" onClick={handleGoBack}>
          <div className="country_button_image_container">
            <img
              src="src/assets/arrow-left.svg"
              alt="Icon go back"
              className="country_button_image"
            />
          </div>
          <span className="country_button-goback_text">Back</span>
        </button>
      </div>
      {isLoading ? (
        <div className="container-spinner">
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      {data ? (
        <>
          <div className="country_bottom">
            <div className="country_bottom_left">
              <div className="country_flag_image_container">
                <img
                  src={details.flags.svg ?? details.flags.png}
                  alt={details.flags.alt}
                  className="country_page_flag_image"
                />
              </div>
            </div>
            <div className="country_bottom_right">
              <h2 className="country_page_name">
                {details.name.common ?? "Unknown"}
              </h2>
              <div className="country_details">
                <div className="country_details_left">
                  <p className="country_detail">
                    <span className="country_detail_title">Native Name:</span>
                    <span className="country_detail_value">{nativeName()}</span>
                  </p>
                  <p className="country_detail">
                    <span className="country_detail_title">Population:</span>
                    <span className="country_detail_value">
                      {details.population ?? "Unknown"}
                    </span>
                  </p>
                  <p className="country_detail">
                    <span className="country_detail_title">Region:</span>
                    <span className="country_detail_value">
                      {details.region ?? "Unknown"}
                    </span>
                  </p>
                  <p className="country_detail">
                    <span className="country_detail_title">Sub Region:</span>
                    <span className="country_detail_value">
                      {details.subregion ?? "Unknown"}
                    </span>
                  </p>
                  <p className="country_detail">
                    <span className="country_detail_title">Capital:</span>
                    <span className="country_detail_value">
                      {details.capital ?? "Unknown"}
                    </span>
                  </p>
                </div>
                <div className="country_details_right">
                  <p className="country_detail">
                    <span className="country_detail_title">
                      Top Level Domain:
                    </span>
                    <span className="country_detail_value">
                      {details.tld[0] ?? "Unknown"}
                    </span>
                  </p>
                  <p className="country_detail">
                    <span className="country_detail_title">Currencies:</span>
                    <span className="country_detail_value">{currencies()}</span>
                  </p>
                  <p className="country_detail">
                    <span className="country_detail_title">Languages:</span>
                    <span className="country_detail_value">{languages()}</span>
                  </p>
                </div>
              </div>
              <div className="country_borders">
                <h3 className="country_borders_title">Border Countries:</h3>
                {details.borders &&
                  details.borders.map((el, index) => (
                    <Link key={index} to={`/${countriesCode[el]}`}>
                      {countriesCode[el]}
                    </Link>
                  ))}
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        ""
      )}
      {error && error.err ? (
        <Message message={error.statusText} error={error.status} />
      ) : (
        ""
      )}
    </article>
  );
}
