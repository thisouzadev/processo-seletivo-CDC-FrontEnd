import PropTypes from "prop-types";
import React, { useState } from "react";
import context from "./context";

function Provider ({ children }) {
  const [findById, setFindById] = useState("");
  const [employes, setEmployes] = useState([]);
  const [employesFiltered, setEmployesFiltered] = useState([]);
  const [showModalCreated, setShowModalCreated] = useState(false);
  const [showModalUpdated, setShowModalUpdated] = useState(false);
  const [showModalDeleted, setShowModalDeleted] = useState(false);
  const [error, setError] = useState(null);
  const contextValue = {
    showModalCreated,
    setShowModalCreated,
    error,
    setError,
    showModalUpdated,
    setShowModalUpdated,
    findById,
    setFindById,
    showModalDeleted,
    setShowModalDeleted,
    employes,
    setEmployes,
    employesFiltered,
    setEmployesFiltered
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
