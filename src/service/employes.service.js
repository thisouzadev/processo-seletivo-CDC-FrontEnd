/* eslint-disable camelcase */
import axios from "axios";

class EmployesService {
  async getEmployes () {
    const response = await axios({
      method: "GET",
      url: "cdc-card.herokuapp.com/employes" || "http://localhost:3000/employes",
      data: {}
    });
    return response;
  }

  async created (nome, cpf, departamento, salario, data_de_nascimento) {
    const response = await axios({
      method: "POST",
      url: "cdc-card.herokuapp.com/register" || "http://localhost:3000/register",
      data: {
        nome,
        cpf,
        departamento,
        salario,
        data_de_nascimento
      }
    });
    return response;
  }

  async delete (id) {
    const response = await axios({
      method: "delete",
      url: `cdc-card.herokuapp.com/register/${id}` || `http://localhost:3000/register/${id}`,
      data: {}
    });
    return response;
  }

  async update (id, nome, cpf, departamento, salario, data_de_nascimento) {
    const response = await axios({
      method: "put",
      url: `cdc-card.herokuapp.com/register/${id}` || `http://localhost:3000/register/${id}`,
      data: {
        nome,
        cpf,
        departamento,
        salario,
        data_de_nascimento
      }
    });
    return response;
  }

  async findById (id) {
    const response = await axios({
      method: "get",
      url: `cdc-card.herokuapp.com/register/${id}` || `http://localhost:3000/register/${id}`,
      data: {}
    });
    return response;
  }
}

export default EmployesService;
