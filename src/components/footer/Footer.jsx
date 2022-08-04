import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import context from "../../context/context";
import UpdateEmployer from "../update/UpdateEmployer";
import CreateEmployer from "../create/CreateEmployer";
import ExcludeEmployer from "../exclude/ExcludeEmployer";
function Footer () {
  const { setShowModalCreated } = useContext(context);

  const handleOpen = () => setShowModalCreated(true);

  return (
    <section className="footer">
      <Button onClick={handleOpen}>Novo funcionário</Button>
      <CreateEmployer />
      <UpdateEmployer />
      <ExcludeEmployer />
    </section>
  );
}

export default Footer;
