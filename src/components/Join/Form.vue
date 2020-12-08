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
      fetch("http://localhost:1337/auth/local/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.email,
          email: this.email,
          password: this.password,
          nombre_empresa: this.n_empresa,
        }),
      })
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          swal("Registrado!", "Bienvenido a la familia unsplash", "success");
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errorMessage = error;
          swal("Error!", "correo o usuario ya estan registrados", "error");
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style></style>
