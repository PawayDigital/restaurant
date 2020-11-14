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
import HeaderComponent from "@/components/Layouts/HeaderComponent.vue";
import Content from "@/components/Home/Content.vue";
import About from "@/components/Home/About.vue";
import Card from "@/components/Home/Card.vue";
import FooterComponent from "@/components/Layouts/FooterComponent.vue";

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
@import "../assets/css/header.css";
@import "../assets/css/home.css";
@import "../assets/css/footer.css";
</style>
