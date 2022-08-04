import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import context from "../../context/context";
import EmployesService from "../../service/employes.service";
import Error from "../Error";
import "./createEmployer.css";
function CreateEmployer () {
  const { showModalCreated, setShowModalCreated, setError } = useContext(context);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [salario, setSalario] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");

  const createdEmployer = () => {
    if (nome === "" || cpf === "" || departamento === "" || salario === 0 || dataDeNascimento === "") {
      setError("Preencha todos os campos");
      return;
    }
    new EmployesService()
      .created(nome, cpf, departamento, salario, dataDeNascimento)
      .then(() => {
        setError("");
        setNome("");
        setCpf("");
        setDepartamento("");
        setSalario("");
        setDataDeNascimento("");
        setShowModalCreated(false);
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
      }
      );
  };
  const handleButtonSubmit = (event) => {
    event.preventDefault();
    createdEmployer();
  };
  console.log(nome, cpf, departamento, salario, dataDeNascimento);
  const cpfMask = value => {
    // https://medium.com/trainingcenter/mascara-de-cpf-com-react-javascript-a07719345c93
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };
  const CurrencyMask = value => {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d)(\d{2})$/, "$1,$2") // coloca virgula antes dos 2 ultimos digitos
      .replace(/(\d)(\d{3}),(\d{2})/, "$1.$2,$3");
  };

  const handleChangeNome = (event) => setNome(event.target.value);
  const handleChangeCpf = (event) => setCpf(cpfMask(event.target.value));
  const handleClickDepartamento = (event) => setDepartamento(event.target.value);
  const handleChangeSalario = (event) => setSalario("R$" + CurrencyMask(event.target.value));
  const handleChangeDataDeNascimento = (event) => setDataDeNascimento(event.target.value);

  const handleClose = () => setShowModalCreated(false);

  return (
    <Modal show={showModalCreated} onHide={handleClose} animation={false}>
      <Modal.Title>Novo funcionário</Modal.Title>
      <Form action="" method="post">
        <Form.Group className="mb-3">
          <Form.Label className="label" htmlFor="">
          Nome:
            <Form.Control
              type="text"
              name="nome"
              value={nome}
              onChange={handleChangeNome}
              placeholder="Nome" />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="label" htmlFor="">
          CPF:
            <Form.Control
              type="text"
              maxLength='14'
              value={cpf}
              onChange={handleChangeCpf}
              name="cpf"
              placeholder="CPF" />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="label" htmlFor="">
          Departamento:
            <Form.Select name={departamento}
              onClick={handleClickDepartamento}
              aria-label="">
              <option value="">Selecione</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Suporte">Suporte</option>
              <option value="TI">TI</option>
            </Form.Select>
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="label" htmlFor="">
          Salário:
            <Form.Control type="text"
              value={salario}
              onChange={handleChangeSalario}
              name="salario"
              placeholder="Salário" />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="label" htmlFor="">
          Data de nascimento:
            <Form.Control
              type="date"
              onChange={handleChangeDataDeNascimento}
              name="data_de_nascimento"
              placeholder="Data de nascimento" />
          </Form.Label>
        </Form.Group>
        <Button className="button" onClick={handleClose}>cancelar</Button>
        <Button className="button" type="submit" onClick={handleButtonSubmit}>Salvar</Button>
      </Form>
      <Error />
    </Modal>
  );
}

export default CreateEmployer;
