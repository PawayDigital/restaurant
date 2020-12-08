<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      mini-variant-width="100"
      class="cyan darken-1"
    >
      <v-list>
        <v-list-item>
          <v-list-item-action></v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item to="/">
          <v-list-item-content>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              class="rounded"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-icon class="mb-3">dashboard</v-icon>
            <v-list-item-subtitle align="center"
              >dashboard</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-icon class="mb-3">restaurant</v-icon>
            <v-list-item-subtitle align="center">Menu</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-icon class="mb-3">category</v-icon>
            <v-list-item-subtitle align="center"
              >Categorias</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list style="" class="ml-3" flat>
        <v-list-item to="/" class="justify-center">
          <v-list-item-action>
            <v-icon align="center">exit_to_app</v-icon>
            <v-list-item-subtitle align="center" class="ml-2 mt-1"
              >Salir</v-list-item-subtitle
            >
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
