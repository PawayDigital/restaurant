<template>
  <div id="header-component">
    <v-container>
      <v-card flat tile>
        <v-toolbar fixed dense>
          <v-img
            lazy-src="@/assets/logo/logo.svg"
            max-height="50"
            max-width="50"
            src="@/assets/logo/logo.svg"
            class="logo"
          ></v-img>
          <v-toolbar-title>Restaurant</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-tabs color="secundary">
            <v-tab to="/">
              Home
            </v-tab>
            <!-- <a href="/#about" class="v-tab">hola</a> -->
            <v-tab class="text-gray">
              <a href="/#about" class="text-decoration-none">About</a>
            </v-tab>
            <v-tab to="/contact">
              Contact
            </v-tab>
            <v-tab>
              Login
            </v-tab>
          </v-tabs>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-toolbar>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
.text-gray a {
  color: rgba(0, 0, 0, 0.54) !important;
}
.v-tab--active.text-gray a {
  color: black !important;
}
</style>
