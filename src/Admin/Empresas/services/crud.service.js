import axios from "axios";
const _url = process.env.VUE_APP_RUTA_API;
const token = localStorage.getItem("token");

export default new (class CrudService {
  getCategorias() {
    return axios.get(_url + "/categorias/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  categoriaDelete(id) {
    return axios.delete(_url + "/categorias/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  categoriaUpdate(data, id) {
    return axios.put(_url + "/categorias/" + id, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  categoriaSave(data) {
    return axios.post(_url + "/categorias", data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  // productos
  getProductos() {
    return axios.get(_url + "/producto/me", {
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
