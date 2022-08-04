import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import context from "../../context/context";
import EmployesService from "../../service/employes.service";
import "./main.css";

function Main () {
  const {
    showModalCreated,
    setFindById,
    setShowModalUpdated,
    showModalUpdated,
    setShowModalDeleted,
    employes,
    setEmployes,
    setEmployesFiltered,
    employesFiltered,
    showModalDeleted
  } = useContext(context);
  const [id, setId] = useState("");

  const handleClickDelete = (id) => {
    new EmployesService()
      .findById(id)
      .then(({ data }) => {
        setFindById(data);
        setShowModalDeleted(true);
        setId(id);
      });
  };

  const handleClickUpdate = (id) => {
    new EmployesService()
      .findById(id)
      .then(({ data }) => {
        setFindById(data);
        setShowModalUpdated(true);
        setId(id);
      });
  };

  useEffect(() => {
    new EmployesService()
      .getEmployes()
      .then(({ data }) => {
        setEmployes(data);
        setEmployesFiltered(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showModalCreated, id, showModalUpdated, showModalDeleted]);

  if (employes.length === 0) {
    return <div className="main"></div>;
  }
  return (
    <>
      <Table responsive="sm" striped bordered hover className="main">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Departamento</th>
            <th>Salário</th>
            <th>Data de nascimento</th>
          </tr>
        </thead>
        <tbody>
          {employesFiltered.map((employe) => (
            <tr key={employe.id}>
              <td>{employe.nome}</td>
              <td>{employe.departamento}</td>
              <td>{employe.salario}</td>
              <td>{employe.data_de_nascimento}</td>
              <td><Button onClick={() => { handleClickUpdate(employe.id); }}>editar</Button></td>
              <td><Button onClick={() => { handleClickDelete(employe.id); }}>excluir</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Main;
