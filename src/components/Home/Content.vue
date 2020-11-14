<template>
  <v-row>
    <v-col cols="12" lg="4" class="d-flex flex-column justify-center pr-5">
      <h3 class="mb-3 display-1">Tu Carta Online</h3>
      <p>Siente una experiencia elegante y simple al alcance de un click</p>
      <a href="#planes" style="text-decoration: none;">
        <v-btn tile depressed color="blue" class="white--text">Get Start</v-btn>
      </a>
    </v-col>
    <v-col cols="12" lg="8">
      <v-img
        lazy-src="@/assets/images/home.jpg"
        class="rounded home-img"
        src="@/assets/images/home.jpg"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Content",
};
</script>
