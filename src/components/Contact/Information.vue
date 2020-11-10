<template>
  <v-col cols="12" md="6">
    <div class="contact-info">
      <h3>Información de contacto</h3>
      <p class="text-secondary font-weight-light">
        Hola de nuevo! Si tienes alguna duda no dudes en comunicarte.
      </p>
      <ul class="text-secondary font-weight-light">
        <li><v-icon>room</v-icon> Mocoa - Putumayo, Colombia</li>
        <li><v-icon>call</v-icon> +57 333 222 3444</li>
        <li><v-icon>email</v-icon> examplegmail.com</li>
      </ul>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style>
.contact-info {
  width: 100%;
}
.contact-info ul {
  padding-left: 0;
}

.contact-info ul li {
  line-height: 40px;
  display: flex;
  align-items: center;
}

.contact-info ul li i {
  margin-right: 10px;
  color: #26272e;
  font-size: 16px;
}

.contact-info ul li {
  font-size: 14px;
}
</style>
