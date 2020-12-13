import axios from "axios";
const _url = process.env.VUE_APP_RUTA_API;
const token = localStorage.getItem("token");

export default new (class ProfileService {
  perfil() {
    return axios.get(_url + "/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  imgPerfil() {
    return axios.get(process.env.VUE_APP_RUTA_API + "/foto/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  updateProfile(data, id) {
    return axios.put(_url + "/users/" + id, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  updateImg(data, id) {
    return axios.put(_url + "/fotos/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  }
})();
