/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function Country() {
  let { name } = useParams();
  let navigate = useNavigate();
  let url = `https://restcountries.com/v3.1/name/${name}`;
  let { data, isLoading, error } = useFetch(url);

  const handleGoBack = () => navigate(-1);

  return (
    <article className="country">
      <button onClick={handleGoBack}>Atrás</button>
      <h1>{name}</h1>
      <pre>
        <code>{data && JSON.stringify(data)}</code>
        <code>{error && JSON.stringify(error)}</code>
      </pre>
    </article>
  );
}
