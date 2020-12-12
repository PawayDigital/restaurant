<template>
  <div id="profile" style="height: 100vh;" class="d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" class="offset-lg-2">
          <v-card class="mx-auto" height="350" outlined>
            <v-img
              height="100"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  Empresa
                </div>
                <v-list-item-title class="headline mb-3">
                  {{ this.empresa.nombre_empresa }}
                </v-list-item-title>
                <v-list-item-subtitle class="mb-2"
                  >Correo: {{ this.empresa.email }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  >Celular: {{ this.empresa.celular }}</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"
                ><v-img
                  :src="'http://localhost:1337' + this.foto.imagen"
                ></v-img
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined text>
                Editar Informacion
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-date-picker v-model="date2" color="black"> </v-date-picker>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      empresa: [],
      foto: [],
      date2: new Date().toISOString().substr(0, 10),
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userData();
  },
  methods: {
    userData() {
      axios
        .get("http://localhost:1337/users/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.empresa = res.data;
          }
        });
    },
    fotoData() {
      axios
        .get("http://localhost:1337/foto/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status == 200) {
            console.log((this.foto = res.data));
          }
        });
    },
  },
};
</script>

<style></style>
