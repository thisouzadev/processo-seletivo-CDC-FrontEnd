import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import context from "../../context/context";
import EmployesService from "../../service/employes.service";

function ExcludeEmployer () {
  const { showModalDeleted, setShowModalDeleted, findById } = useContext(context);
  const handleClickDelete = (id) => {
    new EmployesService()
      .delete(id)
      .then(() => {
        setShowModalDeleted(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => setShowModalDeleted(false);
  return (
    <div>
      <Modal show={showModalDeleted} onHide={handleClose} animation={false}>
        <Modal.Title>Deseja excluir o funcionário abaixo</Modal.Title>
        <Modal.Body>
          <p>Nome: {findById.nome}</p>
          <p>CPF: {findById.cpf}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose()}>Cancelar</Button>
          <Button onClick={() => handleClickDelete(findById.id)}>Excluir</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ExcludeEmployer;
