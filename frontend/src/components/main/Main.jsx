import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import context from "../../context/context";
import EmployesService from "../../service/employes.service";
import "./main.css";
function Main () {
  const [employes, setEmployes] = useState([]);
  const { showModalCreated } = useContext(context);
  const [id, setId] = useState("");
  const handleDelete = (id) => {
    new EmployesService().delete(id);
    setId(id);
  };
  useEffect(() => {
    new EmployesService()
      .getEmployes()
      .then(({ data }) => {
        setEmployes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showModalCreated, id]);
  console.log(employes);

  if (employes.length === 0) {
    return <div className="main"></div>;
  }
  return (
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
        {employes.map((employe) => (
          <tr key={employe.id}>
            <td>{employe.nome}</td>
            <td>{employe.departamento}</td>
            <td>{employe.salario}</td>
            <td>{employe.data_de_nascimento}</td>
            <td><Button>editar</Button></td>
            <td><Button onClick={() => { handleDelete(employe.id); }}>excluir</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Main;
