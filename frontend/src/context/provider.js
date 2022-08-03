import PropTypes from "prop-types";
import React from "react";
import context from "./context";

function Provider ({ children }) {
  const contextValue = {

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
