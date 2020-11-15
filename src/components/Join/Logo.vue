<template>
  <v-main class="text-center mt-5">
    <router-link to="/">
      <img width="130" src="@/assets/logo/logo.svg" alt="" srcset="" />
    </router-link>
    <h2 class="display-1 mt-3">Join</h2>
    <p class="mt-3 text--darken-1">
      Already have an account?
      <span>
        <router-link to="/login" class="text--disabled"> Login</router-link>
      </span>
    </p>
  </v-main>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style></style>
