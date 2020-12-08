<template>
  <v-app>
    <Error />
  </v-app>
</template>

<script>
import Error from "@/components/Error/Error404.vue";
export default {
  components: {
    Error,
  },
};
</script>

<style>
@import "../assets/css/error.css";
@import "../assets/css/responsive404.css";
</style>
