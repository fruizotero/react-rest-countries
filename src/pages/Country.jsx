/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Country() {
  let { name } = useParams();
  let navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <article className="country">
        <button onClick={handleGoBack} >Atrás</button>
      <h1>{name}</h1>
    </article>
  );
}
