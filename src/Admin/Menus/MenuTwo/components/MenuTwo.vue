<template>
  <div class="mt-3">
    <v-row class="mx-2">
      <v-col cols="12" sm="12" md="6">
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="4"
            v-for="pro in productos"
            :key="pro.id"
          >
            <v-card :loading="loading" class="mx-auto " max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="100" :src="_url + pro.imagen.url"></v-img>

              <div @click="ver(pro.id)" style="cursor: pointer;">
                <v-card-title>{{ pro.nombre }}</v-card-title>
              </div>
              <v-card-text>
                <div class="my-1 subtitle-1">$ • {{ pro.precio }}</div>

                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <div>
          <div>
            <v-img
              height="300"
              width="100%"
              :src="_url + producto_one.imagen.url"
            ></v-img>
          </div>
          <div class="mt-3">
            <h3 class="text-center mb-3">{{ producto_one.nombre }}</h3>
            <p class="text-justify">
              {{ producto_one.descripcion }}
            </p>
          </div>
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

<style></style>
