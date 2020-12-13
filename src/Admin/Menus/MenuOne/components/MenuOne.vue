<template>
  <div class="ancho-menu">
    <v-row>
      <v-col cols="12" sm="12" md="6" class="menu" style="height: 100vh;">
        <v-row class="ml-1">
          <v-col
            cols="12"
            sm="12"
            md="6"
            v-for="pro in productos"
            :key="pro.id"
          >
            <v-card :loading="loading" class="mx-auto my-3" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="100" :src="_url + pro.imagen.url"></v-img>

              <v-card-title class="justify-center">{{
                pro.nombre
              }}</v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions class="justify-center">
                <v-btn @click="ver(pro.id)" color="lighten-2" text>
                  Ver
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="white">
        <div>
          <v-img height="300" :src="_url + producto_one.imagen.url"></v-img>
        </div>
        <div class="mt-3">
          <h3 class="text-center mb-3">{{ producto_one.nombre }}</h3>
          <p class="text-justify">{{ producto_one.descripcion }}</p>
          <p class="text-justify">
            <span>Precio:</span>
            {{ producto_one.precio }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import MenuService from "@/Admin/Menus/services/menu.service";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    drawer: false,
    productos: [],
    producto_one: [],
  }),
  computed: {
    _url() {
      return process.env.VUE_APP_RUTA_API;
    },
  },
  mounted() {
    this.menu();
    this.default();
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    menu() {
      MenuService.menu().then((res) => {
        if (res.status == 200) {
          this.productos = res.data;
        }
      });
    },
    default() {
      MenuService.producto_one(17).then((res) => {
        this.producto_one = res.data;
      });
    },
    ver(id) {
      MenuService.producto_one(id).then((res) => {
        this.producto_one = res.data;
      });
    },
  },
};
</script>

<style>
.ancho-menu {
  width: 80%;
  margin-left: 19%;
}
.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}
</style>
