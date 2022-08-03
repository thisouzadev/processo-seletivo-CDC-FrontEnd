import React from "react";
import "./header.css";
function Header () {
  return (
    <header className="header">
      <form className="form" action="" method="post">
        <label htmlFor="">
          Nome:
          <input type="text" name="nome" placeholder="Search" />
        </label>
        <label htmlFor="">
          Departamento:
          <select>
            <option value="">Selecione</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Suporte">Suporte</option>
            <option value="TI">TI</option>
          </select>
        </label>
        <button type="submit">Pesquisa</button>
      </form>
    </header>
  );
}

export default Header;
