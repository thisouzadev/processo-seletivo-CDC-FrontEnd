/* eslint-disable camelcase */
import axios from "axios";

class EmployesService {
  async getEmployes () {
    const response = await axios({
      method: "GET",
      url: "http://localhost:3000/register",
      data: {}
    });
    return response;
  }

  async created (nome, cpf, departamento, salario, data_de_nascimento) {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/register",
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
      url: `http://localhost:3000/register/${id}`,
      data: {}
    });
    return response;
  }

  async update (id, nome, cpf, departamento, salario, data_de_nascimento) {
    const response = await axios({
      method: "put",
      url: `http://localhost:3000/register/${id}`,
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
      url: `http://localhost:3000/register/${id}`,
      data: {}
    });
    return response;
  }
}

export default EmployesService;
