<template>
  <div id="profile" style="height: 100vh;" class="d-flex align-center">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" class="offset-lg-2">
          <v-card class="mx-auto" height="350" outlined>
            <v-img
              height="100"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  Empresa
                </div>
                <v-list-item-title class="headline mb-3">
                  Mi Restaurante
                </v-list-item-title>
                <v-list-item-subtitle class="mb-2"
                  >Correo: alexlds26@gmail.com</v-list-item-subtitle
                >
                <v-list-item-subtitle>Celular: 3222519053</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"
                ><v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined text>
                Editar Informacion
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-date-picker v-model="date2" color="black"> </v-date-picker>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      date2: new Date().toISOString().substr(0, 10),
    };
  },
};
</script>

<style></style>
