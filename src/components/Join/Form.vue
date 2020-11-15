<template>
  <v-main>
    <v-form>
      <v-row class="d-block">
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3 pb-0">
          <v-text-field label="Nombre de la empresa" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3 pb-0">
          <v-text-field label="Username" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3 pb-0">
          <v-text-field label="E-mail" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3">
          <v-text-field label="Password" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-3">
          <v-btn large tile block color="accent" class="text--white">
            Registrarse
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style></style>
