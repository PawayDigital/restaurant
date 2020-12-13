<template>
  <v-main>
    <v-form @submit.prevent="register">
      <v-row class="d-block">
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3 pb-0">
          <v-text-field
            label="Nombre de la empresa"
            v-model="n_empresa"
            type="text"
            required
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3 pb-0">
          <v-text-field
            label="E-mail"
            v-model="email"
            type="email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3">
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3">
          <v-btn
            type="submit"
            large
            tile
            block
            color="accent"
            class="text--white"
          >
            Registrarse
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import AuthService from "@/Auth/services/auth.service";
export default {
  name: "Form",
  data() {
    return {
      n_empresa: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      AuthService.register({
        username: this.email,
        email: this.email,
        password: this.password,
        nombre_empresa: this.n_empresa,
        plantilla: 2,
      })
        .then((response) => {
          this.imguser(response.jwt);
          swal("Registrado!", "Bienvenido a Tu carta online", "success");
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errorMessage = error;
          swal(
            "Error!",
            "correo o nombre de la empresa ya estan registrados",
            "error"
          );
          console.error("There was an error!", error);
        });
    },
    imguser(token) {
      var formData = new FormData();
      let data = {};
      formData.append("files.imagen", this.image);
      formData.append("data", JSON.stringify(data));
      axios
        .post("http://localhost:1337/fotos", formData, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {});
    },
  },
};
</script>

<style></style>
