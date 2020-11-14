<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="6" class="pb-0">
        <v-text-field label="Name" required></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field label="E-mail" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-textarea outlined name="input-7-4" label="Mensaje"></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn large tile class="btn">
          Enviar mensaje
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "Form",
};
</script>
