import React from "react";

const ErrorMessage = ({ message = "movies not found" }) => (
  <div>Whoops, something went wrong: {message}</div>
);

export default ErrorMessage;
