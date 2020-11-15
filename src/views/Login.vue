<template>
  <v-app id="login">
    <v-container class="mt-5">
      <Logo />
      <Form />
    </v-container>
  </v-app>
</template>

<script>
import Logo from "@/components/Login/Logo.vue";
import Form from "@/components/Login/Form.vue";
export default {
  name: "Login",
  components: {
    Logo,
    Form,
  },
};
</script>

<style></style>
