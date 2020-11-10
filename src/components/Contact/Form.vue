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

<style>
/* Buttons  contacto*/
.btn {
  padding: 10px 30px;
  border: 0.5px solid #26272e !important;
  color: #1b1b1b;
  font-weight: 600;
  position: relative;
  z-index: 1;
  outline: none;
  cursor: pointer;
  background-color: white;
}

.btn:after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #26272e;
  -webkit-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
  -o-transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
  transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
}

.btn:hover,
.btn:focus {
  border-color: #26272e;
  color: #fff !important;
}

.btn:hover:after,
.btn:focus:after {
  width: 100%;
}
</style>
