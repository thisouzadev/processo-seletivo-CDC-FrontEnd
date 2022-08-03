import PropTypes from "prop-types";
import React, { useState } from "react";
import context from "./context";

function Provider ({ children }) {
  const [showModalCreated, setShowModalCreated] = useState(false);
  const [error, setError] = useState(null);
  const contextValue = {
    showModalCreated,
    setShowModalCreated,
    error,
    setError
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Provider;
