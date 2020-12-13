import axios from "axios";
const _url = process.env.VUE_APP_RUTA_API;

export default new (class AuthService {
  login(data) {
    return axios.post(_url + "/auth/local", data);
  }
  register(data) {
    return axios.post(_url + "/auth/local/register", data);
  }
})();
