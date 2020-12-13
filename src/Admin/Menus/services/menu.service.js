import axios from "axios";
const _url = process.env.VUE_APP_RUTA_API;
const token = localStorage.getItem("token");

export default new (class ProfileService {
  menu() {
    return axios.get(_url + "/producto/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  producto_one(id) {
    return axios.get(_url + "/productos/" + id);
  }
})();
