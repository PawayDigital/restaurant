<template>
  <v-app>
    <v-container class="mt-5">
      <Logo />
      <Form />
    </v-container>
  </v-app>
</template>

<script>
import Logo from "@/components/Join/Logo.vue";
import Form from "@/components/Join/Form.vue";
export default {
  name: "Join",
  components: {
    Logo,
    Form,
  },
};
</script>

<style lang="scss" scoped></style>
