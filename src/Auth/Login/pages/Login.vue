<template>
  <v-app id="login">
    <v-container class="mt-5">
      <Logo />
      <Form />
    </v-container>
  </v-app>
</template>

<script>
import Logo from "@/Auth/Login/components/Logo.vue";
import Form from "@/Auth/Login/components/Form.vue";
export default {
  name: "Login",
  components: {
    Logo,
    Form,
  },
};
</script>

<style></style>
