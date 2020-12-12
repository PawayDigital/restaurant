<template>
  <v-app>
    <v-container class="mt-5">
      <Logo />
      <Form />
    </v-container>
  </v-app>
</template>

<script>
import Logo from "@/Auth/Register/components/Logo.vue";
import Form from "@/Auth/Register/components/Form.vue";
export default {
  name: "Register",
  components: {
    Logo,
    Form,
  },
};
</script>

<style lang="scss" scoped></style>
