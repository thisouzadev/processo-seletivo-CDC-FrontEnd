import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import context from "../../context/context";
import CreateEmployer from "../create/CreateEmployer";

function Footer () {
  const { setShowModalCreated } = useContext(context);
  const handleOpen = () => setShowModalCreated(true);
  return (
    <section className="footer">
      <Button onClick={handleOpen}>Novo funcionário</Button>
      <CreateEmployer />
    </section>
  );
}

export default Footer;
