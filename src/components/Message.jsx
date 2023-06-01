/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

import "./Message.css"

export function Message({ message, error }) {
  return (
    <article className="message">
      <p className="message_text">{message}</p>
      <p className="message_error">{error}</p>
    </article>
  );
}
