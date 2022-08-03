import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import context from "../context/context";

function Error () {
  const { error } = useContext(context);
  if (!error) {
    return null;
  }
  return (
    <div>
      <Alert>{error}</Alert>
    </div>
  );
}

export default Error;
