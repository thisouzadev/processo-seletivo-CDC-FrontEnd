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
}

export default EmployesService;
