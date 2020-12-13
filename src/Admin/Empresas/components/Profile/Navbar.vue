<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      mini-variant-width="100"
      class="cyan darken-1"
    >
      <v-list>
        <v-list-item>
          <v-list-item-action></v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item to="/admin">
          <v-list-item-content>
            <div v-for="img in perfilimg" :key="img.id" tile color="grey">
              <div>
                <div v-if="img.imagen === null">
                  <v-img
                    :lazy-src="userImage"
                    :src="userImage"
                    class="rounded"
                    max-height="150"
                    max-width="250"
                  ></v-img>
                </div>

                <div v-else>
                  <v-img
                    :lazy-src="_url + img.imagen.url"
                    :src="_url + img.imagen.url"
                    class="rounded"
                    max-height="150"
                    max-width="250"
                  ></v-img>
                </div>
              </div>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/admin">
          <v-list-item-content>
            <v-icon class="mb-3">dashboard</v-icon>
            <v-list-item-subtitle align="center"
              >dashboard</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/carta">
          <v-list-item-content>
            <v-icon class="mb-3">restaurant</v-icon>
            <v-list-item-subtitle align="center">Carta</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/categorias">
          <v-list-item-content>
            <v-icon class="mb-3">category</v-icon>
            <v-list-item-subtitle align="center"
              >Categorias</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list style="" class="ml-3" flat>
        <v-list-item class="justify-center">
          <v-list-item-action @click="exit">
            <v-icon align="center">exit_to_app</v-icon>
            <v-list-item-subtitle align="center" class="ml-2 mt-1"
              >Salir</v-list-item-subtitle
            >
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import ProfileService from "@/Admin/Empresas/services/profile.service";

export default {
  name: "Navbar",
  data() {
    return {
      perfilimg: [],
      drawer: true,
    };
  },
  computed: {
    _url() {
      return process.env.VUE_APP_RUTA_API;
    },
  },
  mounted() {
    this.miperfilimg();
  },
  methods: {
    miperfilimg() {
      ProfileService.imgPerfil().then((res) => {
        if (res.status == 200) {
          this.perfilimg = res.data;
        }
      });
    },
    exit() {
      localStorage.removeItem("token"),
        localStorage.removeItem("user"),
        this.$router.push("/");
    },
  },
};
</script>
