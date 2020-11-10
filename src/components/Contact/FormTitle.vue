<template>
  <v-col cols="12" md="6">
    <div>
      <h3>¿Necesistas acesoria?</h3>
      <p class="font-weight-light">
        Estamos encantados de resolver tus dudas.
      </p>
      <Form />
    </div>
  </v-col>
</template>

<script>
import Form from "@/components/Contact/Form.vue";
export default {
  name: "FormTitle",
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped></style>
