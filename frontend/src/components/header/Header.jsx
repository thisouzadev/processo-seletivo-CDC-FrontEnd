import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import context from "../../context/context";
import "./header.css";
function Header () {
  const { employes, setEmployesFiltered } = useContext(context);
  const [name, setNome] = useState("");
  const [departamento, setDepartamento] = useState("");

  const handleClickDepartamento = (event) => setDepartamento(event.target.value);
  const handleChangeNome = (event) => setNome(event.target.value);

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    setEmployesFiltered(
      employes.filter((employe) => {
        return (
          employe.nome.toLowerCase().includes(name.toLowerCase()) &&
                employe.departamento.toLowerCase().includes(departamento.toLowerCase())
        );
      })
    );
  };
  return (
    <header className="header">
      <Form onSubmit={handleButtonSubmit} className="form">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">
          Nome:
            <Form.Control
              onChange={handleChangeNome}
              type="text"
              name="nome"
              value={name}
              placeholder="Search" />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">
          Departamento:
            <Form.Select
              as="select"
              name="departamento"
              onClick={handleClickDepartamento}>
              <option value="">Selecione</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Suporte">Suporte</option>
              <option value="TI">TI</option>
            </Form.Select >
          </Form.Label>
        </Form.Group>
        <Button type="submit" onClick={handleButtonSubmit}>Pesquisa</Button>
      </Form>
    </header>
  );
}

export default Header;
