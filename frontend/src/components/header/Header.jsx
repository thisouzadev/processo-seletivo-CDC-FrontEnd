import React from "react";
import { Button, Form } from "react-bootstrap";
import "./header.css";
function Header () {
  return (
    <header className="header">
      <Form className="form" action="" method="post">
        <Form.Group className="mb-3">

          <Form.Label htmlFor="">
          Nome:
            <Form.Control type="text" name="nome" placeholder="Search" />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">

          <Form.Label htmlFor="">
          Departamento:
            <Form.Select >
              <option value="">Selecione</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Suporte">Suporte</option>
              <option value="TI">TI</option>
            </Form.Select >
          </Form.Label>
        </Form.Group>
        <Button type="submit">Pesquisa</Button>
      </Form>
    </header>
  );
}

export default Header;
