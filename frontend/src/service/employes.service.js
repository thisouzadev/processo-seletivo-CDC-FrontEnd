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

  // eslint-disable-next-line camelcase
  async created (nome, cpf, departamento, salario, data_de_nascimento) {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/register",
      data: {
        nome,
        cpf,
        departamento,
        salario,
        // eslint-disable-next-line camelcase
        data_de_nascimento
      }
    });
    return response;
  }
}

export default EmployesService;
