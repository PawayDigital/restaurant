<template>
  <v-app class="home">
    <HeaderComponent></HeaderComponent>
    <router-link to="/about">about</router-link>
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";

export default {
  name: "Home",
  components: {
    HeaderComponent,
  },
};
</script>
