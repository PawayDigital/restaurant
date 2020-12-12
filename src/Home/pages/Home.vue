<template>
  <v-app class="home">
    <HeaderComponent />
    <v-container>
      <Content />
      <About />
      <Card />
    </v-container>
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from "@/Layouts/HeaderComponent.vue";
import Content from "@/Home/components/Content.vue";
import About from "@/Home/components/About.vue";
import Card from "@/Home/components/Card.vue";
import FooterComponent from "@/Layouts/FooterComponent.vue";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    Content,
    About,
    Card,
    FooterComponent,
  },
};
</script>

<style>
/* @import "../assets/css/header.css";
@import "../assets/css/home.css";
@import "../assets/css/footer.css"; */
</style>
