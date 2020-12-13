import axios from "axios";
const _url = process.env.VUE_APP_RUTA_API;
const token = localStorage.getItem("token");

export default new (class CrudService {
  getCategorias() {
    return axios.get(_url + "/categorias", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  getProductos() {
    return axios.get(_url + "/productos", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  delete(id) {
    return axios.delete(_url + "/productos/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  update(data, id) {
    return axios.put(_url + "/productos/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  }

  save(data) {
    return axios.post(_url + "/productos", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  }
})();
