import axios from "axios";

const FORM_API_BASE_URL =
  "https://61c62e7dc003e70017b79a14.mockapi.io/api/admin-login";

class ApiFormService {
  getForm() {
    return axios.get(FORM_API_BASE_URL);
  }

  createForm(data) {
    return axios.post(FORM_API_BASE_URL, data);
  }

  getFormById(dataId) {
    return axios.get(FORM_API_BASE_URL + "/" + dataId);
  }

  updateForm(data, dataId) {
    return axios.put(FORM_API_BASE_URL+ "/" + dataId, data);
  }

  deleteForm(formId) {
    return axios.delete(FORM_API_BASE_URL + "/" + formId);
  }
}

export default new ApiFormService();