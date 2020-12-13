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

              <div
                v-for="img in perfilimg"
                :key="img.id"
                tile
                size="80"
                color="grey"
              >
                <div v-if="img.imagen === null">
                  <v-img
                    :lazy-src="userImage"
                    :src="userImage"
                    height="100"
                    width="100"
                  ></v-img>
                </div>

                <div v-else>
                  <v-img
                    :lazy-src="_url + img.imagen.url"
                    :src="_url + img.imagen.url"
                    height="100"
                    width="100"
                  ></v-img>
                </div>
              </div>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined text>
                <router-link to="/edit-profile" class="text-decoration-none"
                  >Editar Informacion</router-link
                >
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
import ProfileService from "@/Admin/Empresas/services/profile.service";
export default {
  name: "Profile",
  data() {
    return {
      empresa: [],
      userImage:
        "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png",
      perfilimg: [],
      date2: new Date().toISOString().substr(0, 10),
    };
  },
  computed: {
    _url() {
      return process.env.VUE_APP_RUTA_API;
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userData();
    this.miperfilimg();
  },
  methods: {
    userData() {
      ProfileService.perfil().then((res) => {
        if (res.status == 200) {
          this.empresa = res.data;
        }
      });
    },
    miperfilimg() {
      ProfileService.imgPerfil().then((res) => {
        if (res.status == 200) {
          this.perfilimg = res.data;
        }
      });
    },
  },
};
</script>

<style></style>
