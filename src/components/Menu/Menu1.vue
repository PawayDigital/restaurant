<template>
  <div class="ancho-menu">
    <v-row>
      <v-col cols="12" sm="12" md="6" class="menu" style="height: 100vh;">
        <v-tabs color="secundary" class="d-flex justify-center">
          <v-tab to="/menu">
            Menu
          </v-tab>
          <v-tab to="/menu">
            Jugos
          </v-tab>
        </v-tabs>
        <v-row class="ml-1">
          <v-col cols="12" sm="12" md="6">
            <v-card :loading="loading" class="mx-auto my-3" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="100"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title class="justify-center">Cafe Badilico</v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions class="justify-center">
                <v-btn color="lighten-2" text>
                  Ver
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!--  -->
          <v-col cols="12" sm="12" md="6">
            <v-card :loading="loading" class="mx-auto my-3" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="100"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title class="justify-center">Cafe Badilico</v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions class="justify-center">
                <v-btn color="lighten-2" text>
                  Ver
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-card :loading="loading" class="mx-auto my-3" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="100"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title class="justify-center">Cafe Badilico</v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions class="justify-center">
                <v-btn color="lighten-2" text>
                  Ver
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <v-card :loading="loading" class="mx-auto my-3" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="100"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title class="justify-center">Cafe Badilico</v-card-title>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions class="justify-center">
                <v-btn color="lighten-2" text>
                  Ver
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="white">
        <div>
          <v-img
            height="300"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
        </div>
        <div class="mt-3">
          <h3 class="text-center mb-3">Mi restaurante</h3>
          <p class="text-justify">
            Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.
            Nulla porttitor accumsan tincidunt.
          </p>
          <p class="text-justify">
            Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Donec rutrum
            congue leo eget malesuada. Vivamus suscipit tortor eget felis
            porttitor volutpat. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    drawer: false,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
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
