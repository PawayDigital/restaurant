<template>
  <v-main>
    <v-form @submit.prevent="login">
      <v-row class="d-block">
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3 pb-0">
          <v-alert v-if="error" type="error" class="mb-3"
            >Tus credenciales son incorrectas</v-alert
          >
          <v-text-field
            label="E-mail"
            v-model="email"
            type="text"
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
            Ingresar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <div class="text-center mt-4">
      Don't have an account?
      <router-link to="/register" class="text--secondary">Join</router-link>
    </div>
  </v-main>
</template>

<script>
import AuthService from "@/Auth/services/auth.service";
import swal from "sweetalert";
export default {
  name: "Form",
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      this.error = false;

      AuthService.login({
        identifier: this.email,
        password: this.password,
      })
        .then((response) => {
          const data = response.data;

          localStorage.setItem("token", data.jwt);
          localStorage.setItem("user", JSON.stringify(data.user));
          swal("Hola!", "Bienvenido de nuevo", "success");
          this.$router.push("/admin");
        })
        .catch((error) => {
          this.error = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
