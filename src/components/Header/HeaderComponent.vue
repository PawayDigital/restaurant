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
            <v-tab to="/about">
              About
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
.logo {
  margin-right: 0.5rem;
}
.theme--light.v-toolbar.v-sheet {
  background-color: transparent !important;
  border-color: transparent;
}
.theme--light.v-card {
  background-color: transparent !important;
}
.v-tabs {
  width: 0;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-btn--icon {
  display: none;
}
.v-slide-group__content {
  justify-content: flex-end;
}
@media (max-width: 768px) {
  .v-btn--icon {
    display: inline-block;
  }
  .v-tabs {
    display: none;
  }
}
</style>
